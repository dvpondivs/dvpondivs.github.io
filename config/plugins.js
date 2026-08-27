import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginPhosphorIcons from "eleventy-plugin-phosphoricons";
import pluginSpeculationRules from "eleventy-plugin-speculation-rules";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

/**
 * Eleventy plugins configuration
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
export default function (eleventyConfig) {
  // Add YAML support for data files
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  // Phosphor Icons
  eleventyConfig.addPlugin(pluginPhosphorIcons, {
    class: "phicon",
    size: 32,
    fill: "currentColor",
  });

  // Image optimization transform
  // https://www.11ty.dev/docs/plugins/image/#eleventy-transform
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Build speed boost: https://www.zachleat.com/web/faster-builds-with-eleventy-img/
    urlPath: "/images/",
    outputDir: ".cache/@11ty/img/",
    failOnError: false,

    // File extensions to process in public folder
    extensions: "html",

    // Output formats for each image
    formats: ["avif", "jpeg", "webp", "auto"],

    // Output image widths (null means original size)
    widths: [300, 320, 640, 800, 960, 1200, null],

    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "100vw",
    },
  });

  // Copy cached images to output after build
  eleventyConfig.on("eleventy.after", () => {
    const cacheDir = ".cache/@11ty/img/";
    if (fs.existsSync(cacheDir)) {
      fs.cpSync(cacheDir, path.join(eleventyConfig.directories.output, "/images/"), {
        recursive: true,
      });
    }
  });

  // Add bundle plugin for CSS/JS
  eleventyConfig.addBundle("css");
  eleventyConfig.addBundle("js");

  // Speculation Rules for prefetching/prerendering
  eleventyConfig.addPlugin(pluginSpeculationRules);
}
