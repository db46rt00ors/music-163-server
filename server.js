var express = require('express');
var formidable = require('formidable')
var path = require('path');
var fs = require('fs');
var app = express();
app.get('/getmusic', (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        var arr = JSON.parse(data.toString())
        res.json(arr)
    })
});
app.post('/uploadfiles', (req, res) => {
    var form = new formidable.IncomingForm();
    form.uploadDir = path.resolve(__dirname, './www/temps')
    // 保留拓展名
    form.keepExtensions = true

    form.parse(req, function (err, fields, files) { 
        var oldpath = files.file.path;
        var newpath = path.join(path.dirname(oldpath), files.file.name);
        fs.renameSync(
            // 先读取文件
            oldpath,
            newpath
        )
        if(files.file.type == 'image/jpeg' || 'image/jpe' || 'image/png' || 'image/gif'){
            res.send(path.parse(files.file.path).base);
        }else{
            res.send({ ok: '文件上传并改名成功！' });
        }
        
    });
})

app.post('/addmusic', (req, res) => {
    var form = new formidable.IncomingForm();
   

    form.parse(req, function (err, fields, files) { 
        res.json({fields})
    });
})



app.post('/getmusic', (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        var type = fields.type
        fs.readFile('./data.json', (err, data) => {
            var arr = JSON.parse(data.toString()).mapList[type];
            res.json(arr)
        })
    })
})
app.use(express.static('www'))
app.listen(3000, () => {
    console.log(3000);
})