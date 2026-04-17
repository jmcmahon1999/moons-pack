@echo off
setlocal EnableDelayedExpansion

set /A EXIT_CODE=0
set packUrl=https://moons-pack.jmcmoon.com

if exist pack.toml goto :check_update

:do_update
rmdir /s /q .\kubejs\server_scripts\moons_pack
rmdir /s /q .\kubejs\startup_scripts\moons_pack
java -jar packwiz-installer-bootstrap.jar --title="Moon's Pack - Installer" %packUrl%/pack.toml 
call curl -s -L -o ".\pack.toml" "%packUrl%/pack.toml"
goto :end_early

:check_update
md .\temp
call curl -s -L -o ".\temp\pack.toml" "%packUrl%/pack.toml"

call :read_toml_version version,pack.toml,packVer
call :read_toml_version version,.\temp\pack.toml,packNewVer
call :read_toml_version neoforge,pack.toml,nfVer
call :read_toml_version neoforge,.\temp\pack.toml,nfNewVer
echo Pack version: Current^=%packVer%
echo Pack version: Target^=%packNewVer%
echo NeoForge version: Current^=%nfVer%
echo NeoForge version: Target^=%nfNewVer%

if "%nfVer%"=="%nfNewVer%" goto :major_check
set /A EXIT_CODE=1
call :update_prompt
goto :end_early

:major_check
call :get_major_version %packVer%,majVer
call :get_major_version %packNewVer%,majNewVer
if "%majVer%"=="%majNewVer%" goto :do_update
set /A EXIT_CODE=1
call :major_version_prompt
if %MAJ_BUTTON%=="OK" set /A EXIT_CODE=0
if %MAJ_BUTTON%=="OK" goto :do_update
if %MAJ_BUTTON%=="CANCEL" set /A EXIT_CODE=0

:end_early
rmdir /s /q .\temp
exit /B %EXIT_CODE%

:: --------------------------------------------------------------

:read_toml_version
for /f "tokens=2 delims==" %%A in ('findstr /b "%~1" %~2') do (
    set value=%%A
)

set value=%value: =%

set value=%value:"=%

set "%~3=%value%"
exit /B 0

:: --------------------------------------------------------------

:get_major_version
for /f "tokens=1 delims=." %%A in ("%~1") do (
    set output=%%A
)
set /A "%~2=%output%"
exit /B 0

:: --------------------------------------------------------------

:major_version_prompt

set PS1=".\temp\major_prompt.ps1"

set SCRIPT=Add-Type -AssemblyName System.Windows.Forms; ^
$message = 'Warning. This update is a major version change. Current version: %packVer%. Update version: %packNewVer%. Major versions may contain breaking changes which may not be save-game compatible.'; ^
$form = New-Object Windows.Forms.Form; ^
$form.Text = 'Moons Pack: Major Version Warning.'; ^
$form.Width = 400; ^
$form.Height = 140; ^
$form.StartPosition = 'CenterScreen'; ^
$label = New-Object Windows.Forms.Label; ^
$label.Text = $message; ^
$label.AutoSize = $false; ^
$label.Left = 10; ^
$label.Top = 10; ^
$label.Width = 350; ^
$label.Height = 50; ^
$form.Controls.Add($label); ^
$cancelButton = New-Object Windows.Forms.Button; ^
$cancelButton.Text = 'Cancel'; ^
$cancelButton.Left = 280; ^
$cancelButton.Top = 60; ^
$cancelButton.Add_Click({ $form.Close() }); ^
$cancelButton.DialogResult = [System.Windows.Forms.DialogResult]::CANCEL; ^
$form.Controls.Add($cancelButton); ^
$okButton = New-Object Windows.Forms.Button; ^
$okButton.Text = 'OK'; ^
$okButton.Left = 190; ^
$okButton.Top = 60; ^
$okButton.Add_Click({ $form.Close() }); ^
$okButton.DialogResult = [System.Windows.Forms.DialogResult]::OK; ^
$form.Controls.Add($okButton); ^
$helpButton = New-Object Windows.Forms.Button; ^
$helpButton.Text = 'Help'; ^
$helpButton.Left = 30; ^
$helpButton.Top = 60; ^
$helpButton.Add_Click({ Start-Process 'https://moons-pack.jmcmoon.com' }); ^
$helpButton.DialogResult = [System.Windows.Forms.DialogResult]::HELP; ^
$form.Controls.Add($helpButton); ^
$form.ShowDialog()

echo %SCRIPT% > %PS1%

for /f "usebackq delims=" %%A in (`powershell -NoProfile -ExecutionPolicy Bypass -File "%PS1%"`) do set "MAJ_BUTTON=%%A"
del %PS1% >nul 2>&1
exit /B 0

:: --------------------------------------------------------------

:update_prompt
set PS1=.\temp\major_prompt.ps1

set SCRIPT=Add-Type -AssemblyName System.Windows.Forms; ^
$message = 'You need to manually update Neoforge. Open the modpack in Modrinth. Go to Settings, Installation. Change the Neoforge version to %nfNewVer%'; ^
$form = New-Object Windows.Forms.Form; ^
$form.Text = 'Moons Pack: NeoForge Update Required'; ^
$form.Width = 400; ^
$form.Height = 140; ^
$form.StartPosition = 'CenterScreen'; ^
$label = New-Object Windows.Forms.Label; ^
$label.Text = $message; ^
$label.AutoSize = $false; ^
$label.Left = 10; ^
$label.Top = 10; ^
$label.Width = 350; ^
$label.Height = 50; ^
$form.Controls.Add($label); ^
$okButton = New-Object Windows.Forms.Button; ^
$okButton.Text = 'OK'; ^
$okButton.Left = 280; ^
$okButton.Top = 60; ^
$okButton.Add_Click({ $form.Close() }); ^
$okButton.DialogResult = [System.Windows.Forms.DialogResult]::OK; ^
$form.Controls.Add($okButton); ^
$helpButton = New-Object Windows.Forms.Button; ^
$helpButton.Text = 'Help'; ^
$helpButton.Left = 190; ^
$helpButton.Top = 60; ^
$helpButton.Add_Click({ Start-Process 'https://moons-pack.jmcmoon.com'; $form.Close() }); ^
$helpButton.DialogResult = [System.Windows.Forms.DialogResult]::OK; ^
$form.Controls.Add($helpButton); ^
$form.ShowDialog()

echo %SCRIPT% > "%PS1%"

for /f "usebackq delims=" %%A in (`call powershell -NoProfile -ExecutionPolicy Bypass -File "%PS1%"`) do set "UPD_BUTTON=%%A"
del "%PS1%" >nul 2>&1
exit /B 1