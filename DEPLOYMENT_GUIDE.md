# 部署指南

本指南将帮助您将智能刷题系统部署到GitHub Pages，让其他人可以通过网页访问。

## 快速部署

### 方法一：使用自动部署脚本（推荐）

1. 确保您已经安装了Git
2. 在GitHub上创建一个新的公开仓库
3. 复制仓库的HTTPS地址
4. 编辑 `deploy.bat` 文件，将仓库地址替换为您的仓库地址
5. 双击运行 `deploy.bat` 文件
6. 按照提示输入您的GitHub用户名和密码（或访问令牌）
7. 等待部署完成

### 方法二：手动部署

#### 步骤1：创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库名称（例如：`smart-quiz-system`）
4. 选择 "Public"（公开仓库）
5. 不要勾选 "Add a README file"（我们已经有了）
6. 点击 "Create repository"

#### 步骤2：上传项目文件

**通过Git命令行：**

```bash
# 在项目文件夹中打开命令行
git init
git add .
git commit -m "Initial commit: 智能刷题系统"
git branch -M main
git remote add origin https://github.com/您的用户名/仓库名称.git
git push -u origin main
```

**通过GitHub网页界面：**

1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将所有项目文件拖拽到上传区域
3. 在底部填写提交信息（例如："Initial commit: 智能刷题系统"）
4. 点击 "Commit changes"

#### 步骤3：启用GitHub Pages

1. 在仓库页面，点击 "Settings" 选项卡
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 选择 "main" 分支
5. 文件夹选择 "/ (root)"
6. 点击 "Save"

#### 步骤4：访问您的网站

几分钟后，您的网站将在以下地址可用：
```
https://您的用户名.github.io/仓库名称
```

例如：`https://username.github.io/smart-quiz-system`

## 自定义域名（可选）

如果您有自己的域名，可以配置自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入您的域名（例如：`quiz.yourdomain.com`）
3. 在您的域名DNS设置中添加CNAME记录，指向 `您的用户名.github.io`

## 更新网站

当您修改了代码后，可以通过以下方式更新网站：

### 使用Git命令行：
```bash
git add .
git commit -m "更新描述"
git push
```

### 使用GitHub网页界面：
1. 在仓库页面点击要修改的文件
2. 点击编辑按钮（铅笔图标）
3. 修改内容后点击 "Commit changes"

## 故障排除

### 网站无法访问
- 检查GitHub Pages是否已启用
- 确认分支选择正确（通常是main或master）
- 等待几分钟，GitHub Pages需要时间构建

### 样式显示异常
- 检查所有CSS文件是否已上传
- 确认文件路径大小写正确
- 检查浏览器控制台是否有错误信息

### 功能不正常
- 检查所有JavaScript文件是否已上传
- 确认浏览器支持ES6+语法
- 检查浏览器控制台是否有错误信息

## 技术支持

如果您在部署过程中遇到问题，可以：

1. 检查GitHub Pages的官方文档
2. 查看仓库的Issues页面
3. 联系项目维护者

## 注意事项

- GitHub Pages只支持静态网站，本项目是纯前端项目，完全兼容
- 免费的GitHub Pages有一些使用限制（如带宽、存储空间等）
- 建议定期备份您的代码和数据
- 如果仓库是私有的，需要升级到GitHub Pro才能使用Pages功能

---

祝您部署顺利！🚀