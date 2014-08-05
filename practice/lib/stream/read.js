/**
 * Created by jiangshan on 14/8/5.
 */
var fs = require('fs');
var rs = fs.createReadStream('./data');
var index = 1;
rs.on('data', function (chunk) {
    console.log(index++ + ": " + chunk.length);
    biz(index, function () {
        var s = 0;
        for(var i=0; i<1000000000; i++){
            s += i;
        }
    });
});

function biz(index, callback){
    callback();
    console.log('biz--->:' + index);
//    callback(index);
}

rs.on('end', function () {
    console.log("====================");
});