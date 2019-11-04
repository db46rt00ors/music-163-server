var express = require('express');
var formidable = require('formidable')
var fs = require('fs');
var app = express();
app.get('/getmusic', (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        var arr = JSON.parse(data.toString())
        res.json(arr)
    })
});
app.post('/getmusic',(req, res)=>{
    var form = new formidable.IncomingForm();
 
    form.parse(req, function(err, fields, files) {
        var type = fields.type
        fs.readFile('./data.json', (err, data) => {
            var arr = JSON.parse(data.toString()).mapList[type];
            console.log(arr);
            res.json(arr)
        })
    })
})
app.use(express.static('www'))
app.listen(3000, () => {
    console.log(3000);
})