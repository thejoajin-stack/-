@echo off
chcp 65001 >nul
echo ===== GitHub 동기화 =====

if not exist .git (
    echo Git 초기화 중...
    git init
    git remote add origin https://github.com/thejoajin-stack/japan2.git
)

git add .
git status
git commit -m "Update: 일본어 퀴즈 사이트 업데이트" 2>nul
if errorlevel 1 (
    echo 변경 사항이 없습니다.
) else (
    git push -u origin main 2>nul
    if errorlevel 1 git push -u origin master 2>nul
    if errorlevel 1 (
        echo 브랜치 확인 중... main 브랜치로 푸시 시도
        git branch -M main
        git push -u origin main
    )
)
echo.
echo 완료. Ctrl+C로 종료하거나 창을 닫으세요.
pause
