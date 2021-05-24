const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const blog = new Schema({
    Title:{type:String,required:true},
    Image:{type:String,required:true},
    Date:{type:String,required:true},
    Author_Name:{type:String,required:true}


})
module.exports = Mongoose.model('blog',blog);