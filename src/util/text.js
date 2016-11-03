var config = require('../config.json');
var natural = require('natural');
var stopWords = require('stopwords-ru');

module.exports = {
    // обработка текста
    showText: function (text) {

        if (typeof(text) !== "string") {
            console.log("Error text::showText");
            return;
        }

        var results = [];
        var words = new natural.WordTokenizer().tokenize(text);

        words.forEach(function (item, i) {
            if (stopWords.indexOf(item) < 1) {
                results.push(item.toUpperCase());
            }
        });

        return results;
    }
};