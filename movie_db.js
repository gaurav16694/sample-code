var https = require('https');
var initiate = async function(text) {
    var titles = [];
    var data = await get_Api_data(text, 1);
    var result = data.data;
    result.forEach(function(element) {
        titles.push(element.Title);
    });
    if (data.total_pages > 1) {
        for (var i = 2; i <= data.total_pages; i++) {
            var data = await get_Api_data(text, i);
            var result = data.data;
            result.forEach(function(element) {
                titles.push(element.Title);
            });
        }
    }
    var sorted = titles.sort();
    sorted.forEach((element) => {
        console.log(element);
    });
}
var get_Api_data = async function(string, page) {
    var data1;
    await new Promise((resolve, reject) => {
        https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${string}&page=${page}`, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                data1 = JSON.parse(data);
                resolve();
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject();
        });
    });
    return data1;
}
initiate('spiderman');
