// Requires
var express = require('express');
var app = express();

// API V1
app.post('/api/v1/parse', (req, res) => {

    var body = req.body.data;
    // JOHN0000
    // MICHAEL000
    // 9994567
    var client = {
        firstName: body.substring(0,8),
        lastName: body.substring(8,18),
        clientId: body.substring(18)
    }

    res.status(200).json({
        statusCode: 200,
        data: client
    });
});

// API V2
app.post('/api/v2/parse', (req, res) => {

    var body = req.body.data;
    // JOHN
    // MICHAEL
    // 999-4567

    // JOHN0000
    // MICHAEL000
    // 9994567
    var fn = body.substring(0,8).split('0');
    var ln = body.substring(8,18).split('0');
    var client = {
        firstName: fn[0],
        lastName: ln[0],
        clientId: body.substring(18,21) + '-' + body.substring(21)
    }

    res.status(200).json({
        statusCode: true,
        data: client
    });
});

module.exports = app;
