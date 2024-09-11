export function removeBackgroundUrl(url) {
    // for example url is https://example.com/image.png
    // return https://remove-bg.customedge.co/example.com/image.png
    const urlObject = new URL(url);
    const host = urlObject.host;
    const path = urlObject.pathname;
    const newUrl = `https://remove-bg.customedge.co/${host}${path}`;

    return newUrl;
}