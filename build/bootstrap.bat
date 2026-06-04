@echo off
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
        if /I "%%~A"=="-u" (
            set "expect=url"
        ) else if /I "%%~A"=="--url" (
            set "expect=url"
        ) else (
            rem Ignore other args here; they are still preserved in %*
        )
    )
)

echo Bootstrap saw:
echo   side=%side%
echo   url=%url%

curl -fsSL -o %script% %url%/bootstrap/%script%
powershell -NoProfile -ExecutionPolicy Bypass -Command "& './%script%'"
