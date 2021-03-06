/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const { getLoader, loaderByName } = require("@craco/craco")

const packages = [path.resolve(__dirname, "src/"), path.resolve(__dirname, "../common/src/")]

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName("babel-loader"))
      if (isFound) {
        const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include]

        match.loader.include = include.concat(packages)
      }
      return webpackConfig
    },
  },
}
