module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy({"src/assets/": ""});
  eleventyConfig.addPassthroughCopy({"src/scripts/": ""});

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
