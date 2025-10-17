# 自动部署到 GitHub Pages 配置说明

## 概述
本项目已配置自动部署到 GitHub Pages，当你推送代码到 `main` 分支时，GitHub Actions 会自动构建并部署你的博客。

## 文件说明

### 1. GitHub Actions 工作流
- **文件位置**: `.github/workflows/deploy.yml`
- **功能**: 当推送到 main 分支时自动触发构建和部署
- **触发条件**: 
  - 推送到 main 分支
  - 创建 Pull Request 到 main 分支

### 2. 部署脚本
- **本地部署**: `deploy-local.sh` - 用于手动部署
- **GitHub 部署**: `deploy.sh` - 原有的部署脚本

### 3. 配置文件
- **GitHub Pages 配置**: `.github/pages.yml` - Pages 相关配置说明

## 使用步骤

### 首次设置

1. **启用 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 `Settings` > `Pages`
   - 在 `Source` 部分选择 `GitHub Actions`

2. **配置自定义域名**（可选）
   - 在 GitHub Pages 设置中添加你的自定义域名 `b.Stone.com`
   - 确保你的域名 DNS 配置正确

3. **推送代码**
   ```bash
   git add .
   git commit -m "配置自动部署"
   git push origin main
   ```

### 日常使用

1. **正常开发**
   ```bash
   # 本地开发
   npm run dev
   
   # 构建项目
   npm run build
   ```

2. **提交代码**
   ```bash
   git add .
   git commit -m "更新博客内容"
   git push origin main
   ```

3. **自动部署**
   - 推送后，GitHub Actions 会自动开始构建和部署
   - 你可以在仓库的 `Actions` 标签页查看部署状态
   - 部署完成后，你的博客会自动更新

### 手动部署（如果需要）

```bash
# 使用本地脚本部署
npm run deploy

# 使用 GitHub 脚本部署
npm run deploy:github
```

## 注意事项

1. **权限要求**
   - 确保仓库是公开的，或者你有 GitHub Pro 账户
   - 确保有足够的权限访问仓库设置

2. **构建环境**
   - 使用 Node.js 18
   - 自动缓存 npm 依赖
   - 使用 Ubuntu 最新版本

3. **自定义域名**
   - 当前配置的域名是 `b.Stone.com`
   - 如需修改，请更新 `.github/workflows/deploy.yml` 中的 `cname` 配置

4. **部署分支**
   - 自动部署到 `gh-pages` 分支
   - 不要手动修改 `gh-pages` 分支的内容

## 故障排除

1. **部署失败**
   - 检查 GitHub Actions 日志
   - 确保所有依赖都正确安装
   - 检查构建命令是否正确

2. **域名访问问题**
   - 检查 DNS 配置
   - 确认域名在 GitHub Pages 设置中正确配置

3. **权限问题**
   - 确保 GitHub Token 有足够权限
   - 检查仓库设置中的 Pages 权限

## 相关命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 本地部署
npm run deploy

# GitHub 部署
npm run deploy:github

# 百度推送
npm run baiduPush
```

## 技术栈

- **构建工具**: VuePress 1.8.0
- **主题**: vuepress-theme-vdoing
- **部署**: GitHub Actions + GitHub Pages
- **Node.js**: 18.x
- **操作系统**: Ubuntu Latest
