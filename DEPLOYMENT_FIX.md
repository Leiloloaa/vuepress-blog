# 部署错误修复指南

## 问题描述

在部署VuePress博客到GitHub Pages时遇到以下错误：

```
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
Error: Action failed with "The process '/usr/bin/git' failed with exit code 1"
```

## 问题原因

1. **远程分支冲突**：远程的 `gh-pages` 分支有新的提交，而本地没有这些更新
2. **GitHub Actions 权限问题**：部署时缺少处理冲突的机制
3. **强制推送失败**：在某些情况下，`git push -f` 也会失败

## 解决方案

### 1. 优化 GitHub Actions 配置

已更新 `.github/workflows/` 中的配置文件，添加了以下参数：

```yaml
- name: 部署到 GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./docs/.vuepress/dist
    force_orphan: true    # 强制创建孤立分支
    keep_files: false     # 不保留旧文件
```

### 2. 改进本地部署脚本

更新了 `deploy.sh` 和 `deploy-local.sh`，添加了错误处理：

```bash
# 尝试推送，如果失败则先拉取远程更新
if ! git push -f $githubUrl master:gh-pages; then
  echo "推送失败，尝试拉取远程更新..."
  git fetch $githubUrl gh-pages:gh-pages
  git push -f $githubUrl master:gh-pages
fi
```

### 3. 创建安全部署脚本

新增 `deploy-safe.sh` 脚本，使用更安全的部署策略：

```bash
# 使用孤立分支避免冲突
git checkout --orphan temp-branch
git add -A
git commit -m "${msg}"
git push -f $githubUrl temp-branch:gh-pages
```

## 使用方法

### 方法1：使用GitHub Actions（推荐）

1. 推送代码到 `main` 分支
2. GitHub Actions 会自动构建和部署
3. 如果仍有问题，检查仓库的 Secrets 设置

### 方法2：使用安全部署脚本

```bash
# 使用新的安全部署脚本
npm run deploy:safe
```

### 方法3：手动解决冲突

如果问题持续存在，可以手动清理 `gh-pages` 分支：

```bash
# 删除远程 gh-pages 分支
git push origin --delete gh-pages

# 重新部署
npm run deploy:github
```

## 预防措施

1. **避免并发部署**：确保同时只有一个部署进程在运行
2. **定期清理**：定期清理 `gh-pages` 分支的历史记录
3. **使用孤立分支**：每次部署都创建新的孤立分支，避免历史冲突

## 验证部署

部署成功后，访问你的网站：
- GitHub Pages: `https://Stone.github.io/vuepress-theme-vdoing`
- 自定义域名: `https://b.Stone.com`

## 故障排除

如果仍然遇到问题：

1. 检查 GitHub 仓库的 Pages 设置
2. 确认 `GITHUB_TOKEN` 权限正确
3. 查看 GitHub Actions 的详细日志
4. 尝试删除并重新创建 `gh-pages` 分支

## 相关文件

- `.github/workflows/jekyll-gh-pages.yml` - GitHub Actions 工作流
- `.github/workflows/deploy.yml` - 备用部署工作流
- `deploy.sh` - 标准部署脚本
- `deploy-local.sh` - 本地部署脚本
- `deploy-safe.sh` - 安全部署脚本（新增）
