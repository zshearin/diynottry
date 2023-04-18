module.exports = {
    // ...
    module: {
      rules: [
        // ...
        {
          test: /\.less$/,
          loader: "less-loader",
          options: {
            // Optional less-loader options here
          }
        }
      ]
    }
  };