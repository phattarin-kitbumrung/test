
var app = require('express')();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all("*", executeApi);

function executeApi(req, res, next) {
    switch (req.method) {
        case "GET":
            execGet(req, res, next);
            break;
        case "POST":
            execPost(req, res, next);
            break;
    }
}

function execGet(req, res, next) {
    var params = req.params[0].split('/');
    if (params.length < 3)
        res.send({ code: 530, status: "error", message: "Invalid parameters!" });
    else {
        var obj = require("./" + params[1] + '/' + params[2]);
        obj = new obj(app);
        var func = obj[params[3]];
        var inputs = [];
        for (var i = 4; i < params.length; i++) {
            if (params[i])
                inputs.push(params[i]);
        }
        func(inputs, function (result) {
            var rs = {};
            if (result) {
                rs = result;
            }
            res.send(rs);
        });
    }
}

function execPost(req, res, next) {
    var params = req.params[0].split('/');
    if (params.length < 3)
        res.send({ code: 530, status: "error", message: "Invalid parameters!" });
    else {
        //  try {
        var obj = require("./" + params[1] + '/' + params[2]);
        obj = new obj(app);
        var func = obj[params[3]];
        var re = req.body;
        func(re, function (result) {
            //    console.log(result);
            var rs = {};
            if (result) {
                rs = result;
            }
            res.send(rs);
        });

        /*   }
           catch (err) {
               res.send({ code: 500, status: "error", message: JSON.stringify(err) });
           }*/
    }
}

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});