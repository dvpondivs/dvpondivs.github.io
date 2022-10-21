module.exports = function(eleventyConfg) {
    // eleventyConfig is the default configuration object that Eleventy provides to customize the build process
    eleventyConfg.addWatchTarget("./src/css/"); // eleventy dev server to watch css (hot reload)
    eleventyConfg.addPassthroughCopy("./src/css/"); // pass through css to the build output
    eleventyConfg.addPassthroughCopy("./src/images/"); // pass through images to the build output
    eleventyConfg.addPassthroughCopy({"./src/favicons": "/"}); // pass through files to the root of the build output
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};