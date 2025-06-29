export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.addPassthroughCopy("assets/style.css");
    eleventyConfig.addShortcode("navRight", (content, href) => {
        return `<a class="nav" href="${href}">${content} <span class="nav-arrow">-></span></a>`
    })
    
    eleventyConfig.addShortcode("navLeft", (content, href) => {
        return `<a class="nav" href="${href}"><span class="nav-arrow"><-</span> ${content}</a>`
    })
};