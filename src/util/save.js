var config = require('../config.json');
var natural = require('natural');
var stopWords = require('stopwords-ru');

module.exports = {
    /**
     * Сохраняем файл
     * @param string content
     */
    saveHtml: function (content) {
        console.log(content.toString().length);

        /*
         fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
         if (err) return console.log(err);
         console.log('Hello World > helloworld.txt');
         });
         */
    }
};