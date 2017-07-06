function todolist(params) {
    var modeltodolist = require('./model/modeltodolist');
    var result = { status: 1, message: "", result: {} };
    var r = result;

    this.viewall = function (params, callback) {
        modeltodolist.getalldata(params, function (params2) {
            if (params2 != null)
                r.result = params2;
            else {
                r.status = 0;
                r.message = "not found data";
            }
            callback(r);
        });
    }

    this.viewsingletask = function (params, callback) {
        modeltodolist.getsingletask(params, function (params2) {
            if (params2 != null)
                r.result = params2;
            else {
                r.status = 0;
                r.message = "not found data";
            }
            callback(r);
        });
    }

    this.addtask = function (params, callback) {
        modeltodolist.addtask(params, function (params2) {
            if (params2 != null)
                r.result = params2;
            else {
                r.status = 0;
                r.message = "please insert complete data";
            }
            callback(r);
        });
    }

    this.edittaskdetail = function (params, callback) {
        modeltodolist.edittaskdetail(params, function (params2) {
            if (params2 != null) {
                r.result = params2;
                r.message = "update success";
            }
            else {
                r.status = 0;
                r.message = "update fail";
            }
            callback(r);
        });
    }

    this.settaskstatus = function (params, callback) {
        modeltodolist.settaskstatus(params, function (params2) {
            if (params2 != null) {
                r.result = params2;
                r.message = "update success";
            }
            else {
                r.status = 0;
                r.message = "update fail";
            }
            callback(r);
        });
    }

    this.deletetask = function (params, callback) {
        modeltodolist.deletetask(params, function (params2) {
            if (params2 != null){
                r.result = params2;
                r.message = "delete success";
            }
            else {
                r.status = 0;
                r.message = "delete fail";
            }
            callback(r);
        });
    }
}

module.exports = todolist;
