// Classes

class News {
    image;
    title;
    url;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;

    }
}

// Data

const news = [
    new News(
        'img/news-1.jpg',
        "Janaina Paschoal diz que teve covid-19: \"é uma doença que castiga muito\"",
        "https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/18/janaina-paschoal-diz-que-teve-covid-19-e-uma-doenca-que-castiga-muito.htm"
    ),
    new News(
        'img/news-2.jpg',
        'Europa ultrapassa marca de 100 mil mortos por Covid-19, aponta universidade',
        'https://g1.globo.com/bemestar/coronavirus/noticia/2020/04/19/europa-ultrapassa-marca-de-100-mil-mortos-por-covid-19-aponta-universidade.ghtml'
    ),
    new News(
        'img/news-3.jpg',
        'Bairro de SP com pico de mortes por covid-19 tem lojas e academias abertas',
        'https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/04/19/brasilandia-periferia-com-mais-mortos-em-sp-vive-como-pandemia-inexistisse.htm'
    ),
    new News(
        'img/news-4.jpg',
        'Aumentam as teorias da conspiração que ligam Bill Gates à covid-19',
        'https://exame.abril.com.br/ciencia/aumentam-as-teorias-da-conspiracao-que-ligam-bill-gates-a-covid-19/'
    ),
    new News(
        'img/news-5.jpg',
        'Baixada Santista registra 596 casos confirmados de Covid-19 e soma 41 mortes',
        'https://g1.globo.com/sp/santos-regiao/mais-saude/noticia/2020/04/18/baixada-santista-registra-596-casos-confirmados-de-covid-19-e-soma-41-mortes.ghtml'
    ),
    new News(
        'img/news-6.jpeg',
        'Brasil tem 2.347 mortes e 36.599 casos confirmados de covid-19',
        'https://noticias.r7.com/saude/brasil-tem-2347-mortes-e-36599-casos-confirmados-de-covid-19-18042020'
    ),
];