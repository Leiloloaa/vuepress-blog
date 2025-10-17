# GitHub Pages 自动部署配置步骤

## 概述
本指南将帮助你完成 GitHub Pages 自动部署的完整配置，让你的 VuePress 博客在每次推送代码后自动更新。

## 前置条件
- 拥有 GitHub 账户
- 项目已推送到 GitHub 仓库
- 了解基本的 Git 操作

## 详细配置步骤

### 第一步：启用 GitHub Pages

1. **进入仓库设置**
   - 打开你的 GitHub 仓库页面
   - 点击仓库顶部的 `Settings` 标签

2. **找到 Pages 设置**
   - 在左侧菜单中找到 `Pages` 选项
   - 点击进入 Pages 设置页面

3. **配置 Pages 源**
   - 在 `Source` 部分，选择 `GitHub Actions`
   - 不要选择 `Deploy from a branch`（这是旧方式）

4. **保存设置**
   - 点击 `Save` 保存配置

### 第二步：配置自定义域名（可选）

如果你有自定义域名（如 `b.Stone.com`），请按以下步骤配置：

1. **添加自定义域名**
   - 在 Pages 设置页面的 `Custom domain` 输入框中输入你的域名
   - 例如：`b.Stone.com`
   - 勾选 `Enforce HTTPS`（推荐）

2. **配置 DNS 记录**
   - 在你的域名管理后台添加以下 DNS 记录：
   ```
   类型: CNAME
   名称: b
   值: your-username.github.io
   ```
   - 或者使用 A 记录指向 GitHub Pages 的 IP 地址

3. **验证域名**
   - GitHub 会自动验证域名配置
   - 验证成功后，域名旁边会显示绿色勾号

### 第三步：检查工作流文件

确保你的仓库中有以下文件：

```
.github/
└── workflows/
    └── deploy.yml
```

如果文件不存在，请确保已正确创建并推送到仓库。

### 第四步：测试自动部署

1. **推送代码触发部署**
   ```bash
   # 添加所有更改
   git add .
   
   # 提交更改
   git commit -m "配置自动部署"
   
   # 推送到 main 分支
   git push origin main
   ```

2. **查看部署状态**
   - 进入仓库的 `Actions` 标签页
   - 查看最新的工作流运行状态
   - 绿色勾号表示部署成功，红色叉号表示失败

3. **访问你的网站**
   - 部署成功后，访问 `https://your-username.github.io/repository-name`
   - 或访问你的自定义域名（如果已配置）

### 第五步：验证部署

1. **检查部署内容**
   - 访问你的网站，确认内容已更新
   - 检查所有页面是否正常显示

2. **检查控制台**
   - 打开浏览器开发者工具
   - 检查是否有 JavaScript 错误
   - 确认所有资源正常加载

## 常见问题解决

### 问题 1：部署失败

**症状**：Actions 显示红色叉号

**解决方案**：
1. 点击失败的 Action 查看详细日志
2. 检查构建错误信息
3. 确保所有依赖都正确安装
4. 检查 `package.json` 中的脚本是否正确

### 问题 2：网站无法访问

**症状**：404 错误或页面空白

**解决方案**：
1. 检查 Pages 设置中的源是否正确
2. 确认工作流文件路径正确
3. 检查 `publish_dir` 配置是否为 `./docs/.vuepress/dist`

### 问题 3：自定义域名不工作

**症状**：自定义域名无法访问

**解决方案**：
1. 检查 DNS 配置是否正确
2. 等待 DNS 传播（可能需要几小时）
3. 确认域名在 GitHub Pages 设置中正确配置

### 问题 4：HTTPS 证书问题

**症状**：HTTPS 证书错误

**解决方案**：
1. 在 Pages 设置中启用 `Enforce HTTPS`
2. 等待证书自动生成（可能需要几分钟）
3. 如果问题持续，尝试重新配置域名

## 高级配置

### 环境变量配置

如果需要使用环境变量：

1. 进入仓库 `Settings` > `Secrets and variables` > `Actions`
2. 点击 `New repository secret`
3. 添加需要的环境变量

### 多环境部署

如果需要部署到多个环境：

1. 修改 `.github/workflows/deploy.yml`
2. 添加不同的触发条件
3. 配置不同的部署目标

### 自定义构建脚本

如果需要自定义构建过程：

1. 修改 `package.json` 中的构建脚本
2. 更新工作流文件中的构建命令
3. 确保所有依赖都正确安装

## 监控和维护

### 定期检查

1. **检查部署状态**
   - 定期查看 Actions 页面
   - 确保所有部署都成功

2. **更新依赖**
   - 定期更新 npm 依赖
   - 检查安全漏洞

3. **备份配置**
   - 备份重要的配置文件
   - 记录自定义设置

### 性能优化

1. **构建优化**
   - 使用缓存减少构建时间
   - 优化构建脚本

2. **部署优化**
   - 使用 CDN 加速
   - 优化静态资源

## 相关链接

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [VuePress 官方文档](https://vuepress.vuejs.org/)

## 技术支持

如果遇到问题，可以：

1. 查看 GitHub Actions 日志
2. 检查 VuePress 构建日志
3. 参考官方文档
4. 在 GitHub Issues 中寻求帮助

---

**注意**：配置完成后，每次推送到 `main` 分支都会自动触发部署。请确保在推送前测试本地构建是否正常。
