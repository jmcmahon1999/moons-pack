param (
    [string]$PackUrl = "https://moons-pack.jmcmoon.com",
    [string]$PackPath = ".",
    [string]$Side = "client",
    [switch]$NoUpdate = $false
)

function New-TemporaryDirectory {
    $tmp = [System.IO.Path]::GetTempPath()
    $name = (New-Guid).ToString("N")
    New-Item -ItemType Directory -Path (Join-Path $tmp $name)
}

function Get-TomlValue {
    param (
        [Parameter(Mandatory = $true)][string]$Key,
        [string]$Path = "$TmpDir\pack.toml"
    )

    (Get-Content $Path |
        Where-Object { $_ -match "^\s*$([regex]::Escape($Key))\s*=\s*(.+)\s*$" } |
        ForEach-Object {
            $Matches[1].Trim().Trim('"', "'")
        } |
        Select-Object -First 1)
}

function Get-JsonValue {
    param(
        [string]$Key,
        [string]$Path = "./packwiz.json"
    )

    (Get-Content $Path -Raw | ConvertFrom-Json).$Key
}

function Set-JsonValue {
    param(
        [string]$Path,
        [string]$Key,
        [string]$Value
    )

    $json = Get-Content $Path -Raw | ConvertFrom-Json
    $json | Add-Member -NotePropertyName "$Key" -NotePropertyValue "$Value" -Force;
    $json | ConvertTo-Json -depth 32 | Set-Content $Path
}

function Invoke-MajorVersionPrompt {
    Add-Type -AssemblyName System.Windows.Forms
    $message = 'Warning. This update is a major version change. Current version: %packVer%. Update version: %packNewVer%. Major versions may contain breaking changes which may not be save-game compatible.'
    $form = New-Object Windows.Forms.Form
    $form.Text = 'Moons Pack: Major Version Warning.'
    $form.Width = 400
    $form.Height = 140
    $form.StartPosition = 'CenterScreen'
    $label = New-Object Windows.Forms.Label
    $label.Text = $message
    $label.AutoSize = $false
    $label.Left = 10
    $label.Top = 10
    $label.Width = 350
    $label.Height = 50
    $form.Controls.Add($label)
    $cancelButton = New-Object Windows.Forms.Button
    $cancelButton.Text = 'Cancel'
    $cancelButton.Left = 280
    $cancelButton.Top = 60
    $cancelButton.Add_Click({ $form.Close() })
    $cancelButton.DialogResult = [System.Windows.Forms.DialogResult]::CANCEL
    $form.Controls.Add($cancelButton)
    $okButton = New-Object Windows.Forms.Button
    $okButton.Text = 'OK'
    $okButton.Left = 190
    $okButton.Top = 60
    $okButton.Add_Click({ $form.Close() })
    $okButton.DialogResult = [System.Windows.Forms.DialogResult]::OK
    $form.Controls.Add($okButton)
    $helpButton = New-Object Windows.Forms.Button
    $helpButton.Text = 'Help'
    $helpButton.Left = 30
    $helpButton.Top = 60
    $helpButton.Add_Click({ Start-Process $PackUrl })
    $helpButton.DialogResult = [System.Windows.Forms.DialogResult]::HELP
    $form.Controls.Add($helpButton)
    $form.ShowDialog()
}

function Invoke-NeoForgeUpdatePrompt {
    Add-Type -AssemblyName System.Windows.Forms
    $message = "You need to manually update Neoforge. Open the modpack in Modrinth. Go to Settings, Installation. Change the Neoforge version to $TargetNfVer. Finally delete packwiz.json (in the modpack folder)."
    $form = New-Object Windows.Forms.Form
    $form.Text = 'Moons Pack: NeoForge Update Required'
    $form.Width = 400
    $form.Height = 140
    $form.StartPosition = 'CenterScreen'
    $label = New-Object Windows.Forms.Label
    $label.Text = $message
    $label.AutoSize = $false
    $label.Left = 10
    $label.Top = 10
    $label.Width = 350
    $label.Height = 50
    $form.Controls.Add($label)
    $okButton = New-Object Windows.Forms.Button
    $okButton.Text = 'OK'
    $okButton.Left = 280
    $okButton.Top = 60
    $okButton.Add_Click({ $form.Close() })
    $okButton.DialogResult = [System.Windows.Forms.DialogResult]::OK
    $form.Controls.Add($okButton)
    $helpButton = New-Object Windows.Forms.Button
    $helpButton.Text = 'Help'
    $helpButton.Left = 190
    $helpButton.Top = 60
    $helpButton.Add_Click({ Start-Process 'https://moons-pack.jmcmoon.com'; $form.Close() })
    $helpButton.DialogResult = [System.Windows.Forms.DialogResult]::OK
    $form.Controls.Add($helpButton)
    $form.ShowDialog()
}

Write-Host "$PackUrl"
Write-Host "$Side"


if (-Not ($NoUpdate)) {
    $TmpDir = New-TemporaryDirectory
    curl.exe -f -s -S -L -o "$TmpDir/pack.toml" "$PackUrl/pack.toml"

    $TargetPackVer = Get-TomlValue -Key "version" -Path "$TmpDir/pack.toml"
    $TargetNfVer = Get-TomlValue -Key "neoforge" -Path "$TmpDir/pack.toml"
    $CurrentPackVer = Get-JsonValue -Key "packVersion" -Path "$PackPath/packwiz.json"
    $CurrentNfVer = Get-JsonValue -Key "neoforgeVersion" -Path "$PackPath/packwiz.json"

    if (Test-Path "$PackPath/packwiz.json") {
        Write-Host "Found existing packwiz.json!"
        Write-Host "Pack Version: $CurrentPackVer -> $TargetPackVer"

        if ($TargetPackVer) {
            $TargetMajor = ($TargetPackVer -split '\.')[0]
            $CurrentMajor = ($CurrentPackVer -split '\.')[0]
            Write-Host "Major Versions: $CurrentMajor -> $TargetMajor"
            if ($TargetMajor -ne $CurrentMajor) {
                $dialogResult = Invoke-MajorVersionPrompt
                if ($dialogResult -ne "OK") {
                    exit 1;
                }
            }
        }

        if ($TargetNfVer) {
            if ($TargetNfVer -ne $CurrentNfVer) {
                $dialogResult = Invoke-NeoForgeUpdatePrompt
                exit 1
            }
        }

        Remove-Item -Path "$PackPath/kubejs/*/moons_pack/*" -Recurse -Force
        Remove-Item -Path "$PackPath/logs/*.log.gz" -Recurse -Force
    } else {
        Write-Host "No packwiz.json found, performing initial install."
        Write-Host "Pack Version: $TargetPackVer"
        Write-Host "NeoForge Version: $TargetNfVer"
    }

    if (-Not (Test-Path ".\\packwiz-installer-bootstrap.jar")) {
        curl.exe -f -s -S -L -o "$PackPath/packwiz-installer-bootstrap.jar" "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"
    }

    Remove-Item $TmpDir -Recurse -Force

    java -jar packwiz-installer-bootstrap.jar --title="Moon's Pack - Installer" --side $Side $PackUrl/pack.toml
    
    if ($LASTEXITCODE -eq 0) {
        Set-JsonValue -Path "$PackPath/packwiz.json" -Key "packVersion" -Value "$TargetPackVer"
        Set-JsonValue -Path "$PackPath/packwiz.json" -Key "neoforgeVersion" -Value "$TargetNfVer"
    } else {
        Write-Host "packwiz installer failed. Exiting."
        exit 1
    }
}

exit 0