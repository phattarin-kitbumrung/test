var mongojs = require('../../db');
var db = mongojs.connect;
this.db = db;
var uuidmanagement = require('../../uuidmanage');

exports.getalldata = function (params, callback) {
    db.todolist.findOne({ list_id: params.list_id, owner_id: params.owner_id }, function (err, docs) {
        if (docs != null) {
            delete docs._id;
            callback(docs);
        }
        else {
            callback(null);
        }
    });
}

exports.getsingletask = function (params, callback) {
    db.todolist.aggregate([
        { $match: { list_id: params.list_id, owner_id: params.owner_id } },
        {
            $unwind: "$task"
        },
        { $match: { "task.task_id": params.task_id } },
        {
            $project:
            {
                _id: 0, task: 1

            }
        }
    ], function (error, docs) {
        if (docs.length > 0)
            callback(docs[0].task);

        else
            callback(null);
    })
}

exports.addtask = function (params, callback) {
    var obj = {};
    obj.task_id = uuidmanagement.generateuuid();
    if (params.subject != null)
        obj.subject = params.subject;
    if (params.detail != null)
        obj.detail = params.detail;
    obj.task_status = 0;

    if (params.subject != null && params.detail != null) {
        // push task data
        db.todolist.update({ list_id: params.list_id, owner_id: params.owner_id }, { $push: { task: obj } });
        callback(obj);
    }
    else
        callback(null);
}

exports.edittaskdetail = function (params, callback) {
    db.todolist.update({ list_id: params.list_id, owner_id: params.owner_id, "task.task_id": params.task_id }, { $set: { "task.$.detail": params.detail } }, function (err, docs) {
        if (docs.n >= 1)
            callback(docs);
        else
            callback(null);
    });
}

exports.settaskstatus = function (params, callback) {
    var status = parseInt(params.task_status);
    db.todolist.update({ list_id: params.list_id, owner_id: params.owner_id, "task.task_id": params.task_id }, { $set: { "task.$.task_status": status } }, function (err, docs) {
        if (docs.n >= 1)
            callback(docs);
        else
            callback(null);
    });
}

exports.deletetask = function (params, callback) {
    // delete task data
    db.todolist.update({ list_id: params.list_id, owner_id: params.owner_id, "task.task_id": params.task_id }, { $set: { "task.$": null } }, function (err, docs) {
        if (params.task_id != null && docs.nModified > 0) {
            db.todolist.update({ list_id: params.list_id, owner_id: params.owner_id, task: null }, { $pull: { task: null } });
            callback(params.task_id);
        }
        else
            callback(null);
    });
}



