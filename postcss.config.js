module.exports = {
  plugins: [
      require('autoprefixer'),
      require('postcss-each')({
        plugins: {
          afterEach: [
            require('postcss-at-rules-variables'),
            require('postcss-each-variables'),
          ],
          beforeEach: [
            require('postcss-custom-properties'),
          ]
        }
      }),
      require('postcss-nested'), // allows to nest css classes
      require('postcss-url'), // allows to use src for images (css background-image) path relative to public folder /images/logo.png
      require('postcss-import'),
      require('postcss-for'),
      require('postcss-preset-env')({
        browsers: 'last 2 versions',
        stage: 0,
      }),
      require('postcss-d-ts'),

    ]
  }