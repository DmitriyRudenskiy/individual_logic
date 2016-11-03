var listForLoad = __dirname + '/load/list.json';
var folderForRender = __dirname + '/result/';

var fs = require('fs');
var Crawler = require('phantom-crawler');

var json = JSON.parse(fs.readFileSync(listForLoad, 'utf8'));

var phantom = require('phantom');

// нет заданий на загрузку
if (json.length < 1) {
    console.log('Empty list urls for load');
    return 1;
}


/**
 * Сохраняем файл
 * @param string content
 */
function saveHtml(content) {
    console.log(content.toString().length);

    /*
    fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
    */
}

/**
 * Загрузка страниц
 */

// queue is an array of URLs to be crawled
for (i in json) {
    var url = json[i];
    console.log(url);
}

var page = require('webpage').create();

page.open('http://dnor.ru', function(status) {
    console.log("Status: " + status);

    if(status === "success") {
        page.render(folderForRender + 'example.png');
    }

    phantom.exit();
});