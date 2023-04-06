export const removeHtmltag = (str) => {
    return str.replace(/<[^>]+>/g, '')
}