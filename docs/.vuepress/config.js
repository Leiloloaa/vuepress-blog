const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    theme: 'vdoing', // 使用npm包主题
    // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

    title: "Stone blog",
    description: 'web前端技术博客，朝着阳光走，身影永远在身后，只有努力没有什么做不到；欢迎关注前端智库公众号；',
    // base: '/', // 格式：'/<仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 代码行号
    },

    head,
    plugins,
    themeConfig,
}