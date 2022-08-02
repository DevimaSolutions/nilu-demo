const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  babel: {
    plugins: [
      [
        'babel-plugin-import',
        {
          libraryName: '@mui/material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'core',
      ]
    ]
  }
};