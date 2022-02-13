const path = require('path');
const reactPath = path.resolve(__dirname, 'src');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@entities': path.resolve(reactPath, 'entities'),
      '@hooks': path.resolve(reactPath, 'hooks'),
      '@models': path.resolve(reactPath, 'models'),
      '@services': path.resolve(reactPath, 'services'),
      '@atoms': path.resolve(reactPath, 'atomic/atoms'),
      '@molecules': path.resolve(reactPath, 'atomic/molecules'),
      '@organisms': path.resolve(reactPath, 'atomic/organisms'),
      '@pages': path.resolve(reactPath, 'atomic/pages'),
    },
  },
};