// Webpack 절대 경로를 설정한다(ex - @components)
// 먼저 .eslintignore 에 넣기

const path = require('path');

const aliases = {
  '@': '.',
  '@src': 'src',
  '@apis': 'src/apis',
  '@assets': 'src/assets',
  '@codecs': 'src/codecs',
  '@components': 'src/components',
  '@composables': 'src/composables',
  '@containers': 'src/containers',
  '@interface': 'src/interface',
  '@layouts': 'src/layouts',
  '@router': 'src/router',
  '@store': 'src/store',
  '@styles': 'src/styles',
  '@utils': 'src/utils',
  '@pages': 'src/pages',
  '@locales': 'src/locales',
  '@i18n': 'src/i18n',
  '@plugins': 'src/plugins',
  '@common': 'src/common',
};

// alias에 for문 통해서 넣기
function resolveSrc(_path) {
  // ex) '@components': path.resolve(__dirname , 'src/components)'
  return path.resolve(__dirname, _path);
}

// eslint-disable-next-line guard-for-in, no-restricted-syntax
for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports[alias] = resolveSrc(aliasTo);
}
