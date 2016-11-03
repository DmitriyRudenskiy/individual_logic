var Entities = require('html-entities').XmlEntities;
var entities = new Entities();
var cheerio = require('cheerio');

module.exports = {
    checkContent: function (text) {
        var $ = cheerio.load(text);
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
};