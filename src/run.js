var natural = require('natural');
var stopWords = require('stopwords-ru');
// Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
var cheerio = require('cheerio');

var Entities = require('html-entities').XmlEntities;
var entities = new Entities();

// текущая директория
console.log(__dirname);

// обработка текста
function showText(text) {

    if (typeof(text) !== "string") {
        console.log("Error text");
        return;
    }

    var tokenizer = new natural.WordTokenizer();
    var words = tokenizer.tokenize(text);
    var results = [];

    words.forEach(function (item, i) {
        //console.log(item);

        if (stopWords.indexOf(item) < 1) {
            // console.log(item + ' : ' + i);
            results.push(item);
        }
    });

    console.log(results.join(' ').toLowerCase());

}



function checkContent(content) {
    var $ = cheerio.load(content);
    var title = entities.decode($('head title').text().trim());

    // тело страницы
    var body = $('body');

    body.find('button').remove();
    body.find('label').remove();
    body.find('input').remove();
    body.find('select').remove();
    body.find('style').remove();
    body.find('script').remove();
    body.find('noscript').remove();

    showText(body.text());
}

var phantom = require('phantom');

var sitepage = null;
var phInstance = null;

var html = '';

phantom.create()
    .then(instance => {
        phInstance = instance;
        return instance.createPage();
    })
    .then(page => {
        sitepage = page;
        return page.open('http://dnor.ru');
    })
    .then(status => {
        //console.log(status);
        return sitepage.property('content');
    })
    .then(content => {
        checkContent(content);
        sitepage.close();
        phInstance.exit();
    })
    .catch(error => {
        console.log('ERROR: ' + error);
        phInstance.exit();
    });