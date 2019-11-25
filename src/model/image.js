const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ImageSchema = new Schema({

    title:{type:String},
    description:{type:String},
    filename:{type:String},
    originalname:{type:String},
    path:{type:String},
    mimetype:{type:String},
    size:{type:Number},
    created_at:{type:Date, default:Date.now()}
})


module.exports = mongoose.model('Image', ImageSchema)