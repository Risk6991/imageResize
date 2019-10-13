var easyimg = require('easyimage');
var fs = require('fs'),
    path = require('path');
var imgPath = path.resolve(__dirname, 'src/images');
var outPath = path.resolve(__dirname, 'dist/images');

fs.readdir(imgPath, function (err, files) {
    if (err) console.log(err);
    var fileList = [];
    files.filter(function (file) {
        var target = imgPath + "/" + file;
        var dist = outPath + "/" + file;
        easyimg.resize({
            src: target,
            dst: dist,
            width: 600
        }, function (err, image) {
            if (err) throw err;
            console.log('Resized ' + image.width + ' x ' + image.height);
        });

    });

});