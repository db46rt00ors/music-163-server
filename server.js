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
        // var oldpath = files.file.path;
        // var newpath = path.join(path.dirname(oldpath), files.file.name);
        // fs.renameSync(
        //     // 先读取文件
        //     oldpath,
        //     newpath
        // )

        res.send(path.parse(files.file.path).base);

        // if(files.file.type == 'image/jpeg' || 'image/jpe' || 'image/png' || 'image/gif'){
        //     res.send(path.parse(files.file.path).base);
        // }else{
        //     res.send(path.parse(files.file.path).base);
        // }
        
    });
})

app.post('/addmusic', (req, res) => {
    var id = '';
    var str = '123456789qwertyuioplkjhgfdsazxcvbbnmm';
    for(let i = 0; i< 10; i++){
        id += str[~~(Math.random() * str.length)]
    }
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) { 
        fs.mkdirSync(path.resolve(__dirname, './www/music/recommend/'+ id));

        let musicName  = fields.form.musicName
        let musicSinger = fields.form.musicSinger
        let musicUrl = fields.form.musicUrl
        let musicLrc = fields.form.musicLrc
        let singerImg = fields.form.singerImg
        let playerbg = fields.form.playerbg
        fs.readFile('./data.json', (err, data) => {
            var {mapList} = JSON.parse(data.toString());
            var arr = mapList.recommend
            var musicinfo = {
                id,
                musicName,
                musicSinger,
                musicUrl: `/music/recommend/${id}/${musicUrl}`,
                musicLrc: `/music/recommend/${id}/${musicLrc}`,
                singerImg: `/music/recommend/${id}/${singerImg}`,
                playerbg: `/music/recommend/${id}/${playerbg}`
            }
            arr.unshift(musicinfo);
            var obj = {
                ...mapList,
                recommend: arr
            }
            console.log(obj)
            fs.renameSync(
                path.resolve(__dirname, `./www/temps/${musicUrl}`),
                path.resolve(__dirname, `./www/music/recommend/${id}/${musicUrl}`)
            );
            fs.renameSync(
                path.resolve(__dirname, `./www/temps/${musicLrc}`),
                path.resolve(__dirname, `./www/music/recommend/${id}/${musicLrc}`)
            );
            fs.renameSync(
                path.resolve(__dirname, `./www/temps/${singerImg}`),
                path.resolve(__dirname, `./www/music/recommend/${id}/${singerImg}`)
            );
            fs.renameSync(
                path.resolve(__dirname, `./www/temps/${playerbg}`),
                path.resolve(__dirname, `./www/music/recommend/${id}/${playerbg}`)
            );
            fs.writeFile('./data.json',JSON.stringify({mapList: obj}),(err) => {
                res.json(obj)
            })
 
        })
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