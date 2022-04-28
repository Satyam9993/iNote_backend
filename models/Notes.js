const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title: {
        type : String,
        required: true
    },
    description: {
        type : String,
    },
    Note_data : {
        type : String,
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes',NoteSchema); 