var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.get('/api', function (req, res) {
    res.send({
        lastUpload: new Date(),
        uploads: parseFloat(Math.random()*100).toFixed(0),
        vee: parseFloat(Math.random()*100).toFixed(0),
        newDataPoints: parseFloat(Math.random()*100).toFixed(0),
        alarmsChecked: parseFloat(Math.random()*100).toFixed(0),
        rawTable: parseFloat(Math.random()*100).toFixed(0),
        historyTable: parseFloat(Math.random()*100).toFixed(0),
        aggregationTable: parseFloat(Math.random()*100).toFixed(0),
        jobs: parseFloat(Math.random()*100).toFixed(0),
        webServerCPU: parseFloat(Math.random()*100).toFixed(0),
        webHits: parseFloat(Math.random()*100).toFixed(0)
    })
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});