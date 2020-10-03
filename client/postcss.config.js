const plugins = [require("tailwindcss"), require("autoprefixer")];

  if (process.env.NODE_ENV === "production") {
    const purgecss = require("@fullhuman/postcss-purgecss")({
        content: ["./src/**/*.jsx"],
        defaultExtractor: content => 
        content.match(/[\w-/:]+(?<!:)/g) || []
      });
    plugins.push(purgecss);
  }
  module.exports = {
    plugins: plugins
  }