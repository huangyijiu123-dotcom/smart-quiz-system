@echo off
chcp 65001 >nul
echo ========================================
echo      智能刷题系统 - 自动部署脚本
echo ========================================
echo.

:: 检查Git是否安装
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到Git，请先安装Git：
    echo https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [信息] Git已安装 ✓
echo.

:: 获取用户输入
set /p REPO_URL="请输入您的GitHub仓库地址 (例如: https://github.com/username/repo.git): "
if "%REPO_URL%"=="" (
    echo [错误] 仓库地址不能为空
    pause
    exit /b 1
)

echo.
echo [信息] 开始部署到: %REPO_URL%
echo.

:: 初始化Git仓库（如果尚未初始化）
if not exist ".git" (
    echo [步骤 1/5] 初始化Git仓库...
    git init
    if %errorlevel% neq 0 (
        echo [错误] Git初始化失败
        pause
        exit /b 1
    )
    echo [完成] Git仓库初始化成功 ✓
) else (
    echo [跳过] Git仓库已存在 ✓
)

echo.
echo [步骤 2/5] 添加文件到Git...
git add .
if %errorlevel% neq 0 (
    echo [错误] 添加文件失败
    pause
    exit /b 1
)
echo [完成] 文件添加成功 ✓

echo.
echo [步骤 3/5] 提交更改...
git commit -m "Deploy: 智能刷题系统 - %date% %time%"
if %errorlevel% neq 0 (
    echo [警告] 没有新的更改需要提交，或提交失败
)
echo [完成] 提交完成 ✓

echo.
echo [步骤 4/5] 设置远程仓库...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
if %errorlevel% neq 0 (
    echo [错误] 设置远程仓库失败
    pause
    exit /b 1
)
echo [完成] 远程仓库设置成功 ✓

echo.
echo [步骤 5/5] 推送到GitHub...
git branch -M main
git push -u origin main
if %errorlevel% neq 0 (
    echo [错误] 推送失败，请检查：
    echo 1. 网络连接是否正常
    echo 2. GitHub仓库地址是否正确
    echo 3. 是否有推送权限
    echo 4. 是否需要输入用户名和密码/令牌
    echo.
    echo 提示：如果需要身份验证，Git会自动提示您输入
    pause
    exit /b 1
)

echo [完成] 推送成功 ✓
echo.
echo ========================================
echo           部署完成！🎉
echo ========================================
echo.
echo 接下来请按照以下步骤启用GitHub Pages：
echo.
echo 1. 打开您的GitHub仓库页面
echo 2. 点击 "Settings" 选项卡
echo 3. 在左侧菜单中找到 "Pages"
echo 4. 在 "Source" 部分选择 "Deploy from a branch"
echo 5. 选择 "main" 分支和 "/ (root)" 文件夹
echo 6. 点击 "Save"
echo.
echo 几分钟后，您的网站将在以下地址可用：
echo https://您的用户名.github.io/仓库名称
echo.
echo 详细说明请参考 DEPLOYMENT_GUIDE.md 文件
echo.
pause