/**
 * Created by jiangshan on 14/8/5.
 */
var head = require('./head');
var body = require('./body');

exports.create = function (name) {
    return {
        name:   name,
        head:   head.create(),
        body:   body.create
    };
};