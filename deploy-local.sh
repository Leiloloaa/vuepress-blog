#!/usr/bin/env sh

# 本地部署脚本 - 用于手动部署到 GitHub Pages
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
echo 'b.Stone.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Stone/vuepress-theme-vdoing.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://Stone:${GITHUB_TOKEN}@github.com/Stone/vuepress-theme-vdoing.git
  git config --global user.name "Stone"
  git config --global user.email "894072666@qq.com"
fi
git init
git add -A
git commit -m "${msg}"

# 尝试推送，如果失败则先拉取远程更新
if ! git push -f $githubUrl master:gh-pages; then
  echo "推送失败，尝试拉取远程更新..."
  git fetch $githubUrl gh-pages:gh-pages
  git push -f $githubUrl master:gh-pages
fi

# deploy to coding pages
# echo 'www.Stone.com\nStone.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:xgy/xgy.git
# else
#   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist
