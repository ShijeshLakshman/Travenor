module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
