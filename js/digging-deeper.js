// Functional

function getFontBaseUrl(news) {
    let baseURL = null,
        splitURL = news.url.split('/').filter(el => (el.length > 0));

    // Format [0] - protocol [1] - baseUrl
    baseURL = `${splitURL[0]}//${splitURL[1]}`;

    return baseURL;

}
function newsToFont(baseURL) {
    let li = document.createElement('li');
    li.innerHTML = `<a href="${baseURL}" target="_blank">${baseURL}</a>`;

    return li;
}

function placeFonts(){
    let placement = document.querySelector('#content__digging_deeper ul');

    let fonts = [];
    for(const item of news){
        fonts.push(getFontBaseUrl(item));
    }

    fonts = fonts.filter((font, index, self) => (self.indexOf(font) === index));

    for(const font of fonts){
        placement.append(newsToFont(font))
    }
}


// Init

function main() {
    placeFonts();
}

main();
