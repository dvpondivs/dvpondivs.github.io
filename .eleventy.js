const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(`./src${src}`, {
        widths: [300, 800, null], // the sizes (in px) of the generated images (null means original size)
        formats: ["avif", "jpeg"], // the formats to generate the images in
        urlPath: "/images/",
        outputDir: "./public/images" // the location of the optimised images
    });

    let imageAttribues = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async"
    };

    return Image.generateHTML(metadata, imageAttribues);
}

module.exports = function(eleventyConfg) {
    // eleventyConfig is the default configuration object that Eleventy provides to customize the build process
    eleventyConfg.addWatchTarget("./src/css/"); // eleventy dev server to watch css (hot reload)
    eleventyConfg.addPassthroughCopy("./src/css/"); // pass through css to the build output
    eleventyConfg.addPassthroughCopy("./src/images/"); // pass through images to the build output
    eleventyConfg.addPassthroughCopy({"./src/favicons": "/"}); // pass through files to the root of the build output
    
    config.addPassthroughCopy("src/CNAME");

    eleventyConfg.addShortcode("year", () => `${new Date().getFullYear()}`);

    // image generation process is asynchronous and will take some time the different sizes and formats
    // shortcode has to wait until these have all been generated before injecting HTML into the templates
    eleventyConfg.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};