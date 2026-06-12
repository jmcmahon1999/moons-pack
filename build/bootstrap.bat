rem @echo off
setlocal EnableExtensions EnableDelayedExpansion

set "script=update-client.ps1"
set "url=https://moons-pack.jmcmoon.com"
set "expect="

for %%A in (%*) do (
    if defined expect (
        if /I "!expect!"=="url" (
            set "url=%%~A"
        )
        set "expect="
    ) else (
        if /I "%%~A"=="-PackUrl" (
            set "expect=url"
        ) else (
            rem Ignore other args here; they are still preserved in %*
        )
    )
)

echo "%script%"
echo "%url%"

curl -fsSL -o %script% %url%/bootstrap/%script%
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0%script%" %*
