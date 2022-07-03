const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required'
    },
    description:{
        type: String,
        required: 'This field is required'
    },
    email:{
        type: String,
        required: 'This field is required'
    },
    category:{
        type: String,
        enum: ['Romance', 'Shonen', 'Isekai', 'Mystry', 'Sports', 'Mecha'],
        required: 'This field is required'
    },
    image:{
        type: String,
        // required: 'This field is required'
    }
})

blogSchema.index({ name: 'text', description: 'text' });


module.exports = mongoose.model('Blog',blogSchema)