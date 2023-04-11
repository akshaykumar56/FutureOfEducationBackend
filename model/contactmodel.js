const mongoose= require('mongoose');

const ContactSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    message:
    {
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model('user',ContactSchema);

module.exports = User;