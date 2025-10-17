#!/usr/bin/env sh

# 安全部署脚本 - 处理Git推送冲突
# 确保脚本抛出遇到的错误
set -e

echo "开始安全部署流程..."

# 生成静态文件
echo "构建项目..."
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 设置CNAME文件（暂时注释掉自定义域名）
# echo 'b.Stone.com' > CNAME

# 配置Git用户信息
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Stone/vuepress-theme-vdoing.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://Stone:${GITHUB_TOKEN}@github.com/Stone/vuepress-theme-vdoing.git
  git config --global user.name "Stone"
  git config --global user.email "894072666@qq.com"
fi

# 初始化Git仓库
git init

# 添加所有文件
git add -A
git commit -m "${msg}"

# 安全推送策略
echo "尝试推送到 gh-pages 分支..."

# 方法1: 尝试直接强制推送
if git push -f $githubUrl master:gh-pages 2>/dev/null; then
  echo "✅ 直接推送成功"
else
  echo "⚠️  直接推送失败，尝试解决冲突..."
  
  # 方法2: 拉取远程分支并合并
  git fetch $githubUrl gh-pages:gh-pages-remote || true
  
  # 方法3: 创建新的孤立分支（推荐）
  echo "创建新的孤立分支..."
  git checkout --orphan temp-branch
  git add -A
  git commit -m "${msg}"
  
  # 删除旧的gh-pages分支并推送新分支
  git push -f $githubUrl temp-branch:gh-pages
  
  echo "✅ 使用孤立分支推送成功"
fi

echo "部署完成！"

# 清理
cd -
rm -rf docs/.vuepress/dist
