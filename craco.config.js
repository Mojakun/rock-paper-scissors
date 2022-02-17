const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@css': path.resolve(srcPath, 'css'),
      '@images': path.resolve(srcPath, 'images'),
      '@svg': path.resolve(srcPath, 'svg'),
      '@entities': path.resolve(srcPath, 'entities'),
      '@router': path.resolve(srcPath, 'router'),
      '@hooks': path.resolve(srcPath, 'hooks'),
      '@models': path.resolve(srcPath, 'models'),
      '@services': path.resolve(srcPath, 'services'),
      '@atoms': path.resolve(srcPath, 'atomic/atoms'),
      '@molecules': path.resolve(srcPath, 'atomic/molecules'),
      '@organisms': path.resolve(srcPath, 'atomic/organisms'),
      '@templates': path.resolve(srcPath, 'atomic/templates'),
      '@pages': path.resolve(srcPath, 'atomic/pages'),
    },
  },
};
