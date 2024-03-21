const path = require('path');

module.exports = {

  // theme: {
  //   extend: {
  //     colors: {
  //       // 添加或覆盖你想要的颜色
  //       primary: '#A0FF1F', // 将按钮的主要颜色修改为红色
  //     },
  //   },
  // },

  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'styles');

    return config;
  }
};