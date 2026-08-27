/**
 * Eleventy shortcodes configuration
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
export default function (eleventyConfig) {
  
  // Year shortcode
  eleventyConfig.addShortcode("year", () => {
    return `${new Date().getFullYear()}`;
  });
  
}
