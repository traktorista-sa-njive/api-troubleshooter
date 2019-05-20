const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    id: String,
    type: String,
    date: String,
    status: String,
    result: String
})

mongoose.model('Request', ServiceSchema);
