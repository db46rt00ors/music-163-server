var mongoose = require('mongoose');
module.exports = mongoose.model('Recommends',{
    id:String,
    musicName:String,
    musicSinger:String,
    musicUrl:String,
    musicLrc:String,
    playerbg:String
})