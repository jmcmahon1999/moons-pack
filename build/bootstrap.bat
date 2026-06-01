@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "side="
set "url=https://moons-pack.jmcmoon.com"
set "expect="

for %%A in (%*) do (
    if defined expect (
        if /I "!expect!"=="side" (
            set "side=%%~A"
        ) else if /I "!expect!"=="url" (
            set "url=%%~A"
        )
        set "expect="
    ) else (
        if /I "%%~A"=="-s" (
            set "expect=side"
        ) else if /I "%%~A"=="--side" (
            set "expect=side"
        ) else if /I "%%~A"=="-u" (
            set "expect=url"
        ) else if /I "%%~A"=="--url" (
            set "expect=url"
        ) else (
            rem Ignore other args here; they are still preserved in %*
        )
    )
)

set "script="
if defined side (
    if /I "%side%"=="client" (
        set "script=update-client.bat"
    ) else if /I "%side%"=="both" (
        set "script=update-client.bat"
    ) else if /I "%side%"=="server" (
        set "script=run-server.bat"
    ) else (
        echo Invalid --side value: %side% 1>&2
        exit /b 2
    )
)

echo Bootstrap saw:
echo   side=%side%
echo   url=%url%

curl -fsSL -o %script% %url%/bootstrap/%script%
powershell -NoProfile -ExecutionPolicy Bypass -Command "& '%script%'"
