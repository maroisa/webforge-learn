export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.addPassthroughCopy("assets/style.css");
};