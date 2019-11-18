var mongoose = require('mongoose');
module.exports = mongoose.model('Albums',{
    id:String,
    albumImg:String,
    albumTitle:String,
    albumSinger:String,
    playerbg:String,
    albumbg:String
})