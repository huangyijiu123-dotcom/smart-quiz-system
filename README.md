# 智能刷题系统

一个基于Web的智能刷题应用，支持单选题、多选题和判断题，具有深色主题切换功能。

## 功能特点

- 📚 丰富的题库系统（单选题、多选题、判断题）
- 🌙 深色/浅色主题切换
- 📊 学习进度跟踪
- 📱 响应式设计，支持移动端
- ⚡ 纯前端实现，无需服务器

## 如何在GitHub上发布并通过网页访问

### 步骤1：创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库名称（例如：`smart-quiz-system`）
4. 选择 "Public"（公开仓库）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 步骤2：上传项目文件

#### 方法一：通过GitHub网页界面上传

1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将所有项目文件拖拽到上传区域：
   - `index.html`
   - `main.html`
   - `question.html`
   - `questionBank.js`
   - `review.html`
   - `select.html`
   - `settings.html`
   - `theme-manager.js`
   - `webview-compat.js`
   - `wrong.html`
   - `dark-theme.css`
3. 在底部填写提交信息（例如："Initial commit"）
4. 点击 "Commit changes"

#### 方法二：通过Git命令行（推荐）

```bash
# 在项目文件夹中打开命令行
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/smart-quiz-system.git
git push -u origin main
```

### 步骤3：启用GitHub Pages

1. 在仓库页面，点击 "Settings" 选项卡
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 选择 "main" 分支
5. 文件夹选择 "/ (root)"
6. 点击 "Save"

### 步骤4：访问你的网站

几分钟后，你的网站将在以下地址可用：
```
https://你的用户名.github.io/仓库名称
```

例如：`https://username.github.io/smart-quiz-system`

## 项目结构

```
├── index.html          # 主入口页面
├── main.html           # 主界面
├── question.html       # 答题页面
├── questionBank.js     # 题库数据
├── review.html         # 复习页面
├── select.html         # 选择页面
├── settings.html       # 设置页面
├── wrong.html          # 错题页面
├── dark-theme.css      # 深色主题样式
├── theme-manager.js    # 主题管理器
└── webview-compat.js   # 兼容性脚本
```

## 本地运行

由于这是一个纯前端项目，你可以直接在浏览器中打开 `index.html` 文件来运行应用。

或者使用简单的HTTP服务器：

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .
```

然后在浏览器中访问 `http://localhost:8000`

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- Font Awesome

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License