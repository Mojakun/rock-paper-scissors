const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@entities': path.resolve(srcPath, 'entities'),
      '@hooks': path.resolve(srcPath, 'hooks'),
      '@models': path.resolve(srcPath, 'models'),
      '@services': path.resolve(srcPath, 'services'),
      '@atoms': path.resolve(srcPath, 'atomic/atoms'),
      '@molecules': path.resolve(srcPath, 'atomic/molecules'),
      '@organisms': path.resolve(srcPath, 'atomic/organisms'),
      '@pages': path.resolve(srcPath, 'atomic/pages'),
    },
  },
};
