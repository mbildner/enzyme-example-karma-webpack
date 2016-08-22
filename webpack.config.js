var path = require("path");
module.exports = {
  entry: {
    app: ["./src/Foo.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
