const TextBlock = require("./src/_includes/components/TextBlock");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy({
    "src/assets/": "",
  });

  eleventyConfig.addShortcode("TextBlock", TextBlock);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
