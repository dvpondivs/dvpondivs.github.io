import collections from "./config/collections.js";
import filters from "./config/filters.js";
import shortcodes from "./config/shortcodes.js";
import transforms from "./config/transforms.js";
import plugins from "./config/plugins.js";

// eleventyConfig is the default configuration object that Eleventy provides to customize the build process
export default function (eleventyConfig) {

    // Collections
    collections(eleventyConfig);

    // Filters
    filters(eleventyConfig);

    // Shortcodes
    shortcodes(eleventyConfig);

    // Transforms
    transforms(eleventyConfig);

    // Plugins
    plugins(eleventyConfig);

    // Pass-through copies
    eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
    eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
    // eleventyConfg.addPassthroughCopy("./src/css/"); // pass through css to the build output

    // Watch targets
    eleventyConfig.addWatchTarget("./src/assets/css/");
    eleventyConfig.addWatchTarget("./src/assets/js/");

    // Server options
    eleventyConfig.setServerOptions({
        port: 8080,
        watch: ["public/assets/css/**/*.css", "public/assets/js/**/*.js"],
    });

    eleventyConfig.addPassthroughCopy("./CNAME");

    return {
        dir: {
        input: "src",
        output: "public",
        includes: "_includes",
        data: "_data",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["njk", "md", "html"],
    };

}
