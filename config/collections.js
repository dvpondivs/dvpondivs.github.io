/**
 * Eleventy collections configuration
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
export default function (eleventyConfig) {
  // Games posts collection
  eleventyConfig.addCollection("games", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/games/*.{njk,md}")
      .sort((a, b) => b.date - a.date);
  });

  // Pages collection
  eleventyConfig.addCollection("pages", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/pages/*.{njk,md}")
      .filter((item) => !item.data.excludeFromCollections);
  });

  // All content for sitemap
  eleventyConfig.addCollection("sitemap", (collectionApi) => {
    return collectionApi.getAll().filter((item) => {
      return item.url && !item.data.noindex && !item.data.eleventyExcludeFromCollections;
    });
  });
}
