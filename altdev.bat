@echo off
color 0A
title AltDev Panel
echo Welcome to AltDev!
:loop
tasklist | find /i "classroomwindows.exe" > nul
if errorlevel 1 (
    echo "classroomwindows" is not running.
) else (
    echo "classroomwindows" is running. Closing...
    taskkill /f /im classroomwindows.exe
)
timeout /t 1 /nobreak > nul
goto loop