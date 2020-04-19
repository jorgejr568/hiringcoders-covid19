// Functional

function newsToArticle(news) {
    let article = document.createElement('article'),
        header = document.createElement('header'),
        title = document.createElement('h3');

    header.style.backgroundImage = `url("${news.image}")`;
    title.innerHTML = `<a href="${news.url}" target="_blank">${news.title}</a>`;

    article.append(header);
    article.append(title);

    return article;
}

function placeNews(){
    let placement = document.querySelector('#content__news');

    for(const item of news){
        placement.append(newsToArticle(item))
    }
}


// Init

function main() {
    placeNews();
}

main();
