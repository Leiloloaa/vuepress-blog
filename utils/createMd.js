/**
 * 创建 md 文件脚本
 * 使用方式: npm run create 'xxx'
 * xxx 是文件名（不需要序号和后缀）
 */
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { dateFormat } = require('./modules/fn');

const log = console.log;
const docsRoot = path.join(__dirname, '..', 'docs');

main();

/**
 * 主函数
 */
async function main() {
  // 获取命令行参数
  const args = process.argv.slice(2);
  if (args.length === 0) {
    log(chalk.red('请输入文件名，例如: npm run create "我的文章"'));
    return;
  }

  const fileName = args[0];
  log(chalk.cyan(`准备创建文件: ${fileName}.md\n`));

  // 获取所有可用目录
  const directories = getAllDirectories(docsRoot);
  
  if (directories.length === 0) {
    log(chalk.red('未找到可用目录'));
    return;
  }

  // 让用户选择目录
  const { selectedDir } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedDir',
      message: '请选择要创建文件的目录:',
      choices: directories.map(dir => ({
        name: dir.displayName,
        value: dir.fullPath
      })),
      pageSize: 20
    }
  ]);

  // 计算下一个序号
  const nextIndex = getNextIndex(selectedDir);
  const paddedIndex = String(nextIndex).padStart(2, '0');
  
  // 生成文件名
  const fullFileName = `${paddedIndex}.${fileName}.md`;
  const filePath = path.join(selectedDir, fullFileName);

  // 生成 frontmatter（也可以留空让 vuepress 自动生成）
  const frontmatter = generateFrontmatter(fileName, selectedDir);

  // 创建文件
  fs.writeFileSync(filePath, frontmatter, 'utf8');

  log(chalk.green(`\n✅ 文件创建成功!`));
  log(chalk.cyan(`📄 文件路径: ${filePath}`));
  log(chalk.cyan(`📝 文件名: ${fullFileName}`));
}

/**
 * 递归获取所有目录
 * @param {string} dir 目录路径
 * @param {string} prefix 显示前缀
 * @returns {Array} 目录列表
 */
function getAllDirectories(dir, prefix = '') {
  const result = [];
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && !item.startsWith('@')) {
      // 获取显示名称（去掉序号前缀）
      const displayName = getDisplayName(item);
      const currentPrefix = prefix ? `${prefix} / ${displayName}` : displayName;

      result.push({
        displayName: currentPrefix,
        fullPath: fullPath
      });

      // 递归子目录
      const subDirs = getAllDirectories(fullPath, currentPrefix);
      result.push(...subDirs);
    }
  });

  return result;
}

/**
 * 获取显示名称（去掉序号前缀）
 * @param {string} name 原始名称
 * @returns {string} 显示名称
 */
function getDisplayName(name) {
  // 匹配 "00." 或 "01." 这样的序号前缀
  const match = name.match(/^\d+\.(.*)/);
  return match ? match[1] : name;
}

/**
 * 获取目录下一个可用的序号
 * @param {string} dir 目录路径
 * @returns {number} 下一个序号
 */
function getNextIndex(dir) {
  const items = fs.readdirSync(dir);
  let maxIndex = -1;

  items.forEach(item => {
    // 匹配文件或目录的序号
    const match = item.match(/^(\d+)\./);
    if (match) {
      const index = parseInt(match[1], 10);
      if (index > maxIndex) {
        maxIndex = index;
      }
    }
  });

  return maxIndex + 1;
}

/**
 * 生成随机 permalink
 * @returns {string} 6位十六进制字符串
 */
function generatePermalink() {
  return Math.random().toString(16).slice(2, 8);
}

/**
 * 根据目录路径生成 categories
 * @param {string} dirPath 目录路径
 * @returns {Array} categories 数组
 */
function getCategories(dirPath) {
  // 获取相对于 docs 的路径
  const relativePath = path.relative(docsRoot, dirPath);
  const parts = relativePath.split(path.sep);
  
  // 去掉序号前缀
  return parts.map(part => getDisplayName(part));
}

/**
 * 生成 frontmatter
 * @param {string} title 文章标题
 * @param {string} dirPath 目录路径
 * @returns {string} frontmatter 字符串
 */
function generateFrontmatter(title, dirPath) {
  const date = dateFormat(new Date());
  const permalink = generatePermalink();
  const categories = getCategories(dirPath);

  let frontmatter = '---\n';
  frontmatter += `title: ${title}\n`;
  frontmatter += `date: ${date}\n`;
  frontmatter += `permalink: /pages/${permalink}/\n`;
  frontmatter += 'categories:\n';
  categories.forEach(cat => {
    frontmatter += `  - ${cat}\n`;
  });
  frontmatter += 'tags:\n';
  frontmatter += '  - \n';
  frontmatter += '---\n\n';
  frontmatter += `# ${title}\n`;

  return frontmatter;
}
