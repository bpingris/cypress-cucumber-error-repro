module.exports = config => ({
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: '@badeball/cypress-cucumber-preprocessor/webpack',
            options: config,
          },
        ],
      },
    ],
  },
})
