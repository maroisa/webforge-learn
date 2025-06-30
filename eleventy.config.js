import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.addPassthroughCopy("assets/style.css");
    eleventyConfig.addPassthroughCopy("assets/prism-twilight.css");
    eleventyConfig.addShortcode("navRight", (content, href) => {
        return `<a class="nav" href="${href}">${content} <span class="nav-arrow">-></span></a>`
    })
    
    eleventyConfig.addShortcode("navLeft", (content, href) => {
        return `<a class="nav" href="${href}"><span class="nav-arrow"><-</span> ${content}</a>`
    })
};