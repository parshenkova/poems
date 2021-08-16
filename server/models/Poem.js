const mongoose = require('mongoose');

const PoemSchema = new mongoose.Schema({
    date: { type: String, required: true },
    text: { type: String, required: true },
    status: { type: Number, required: true },
});

const Poem = mongoose.model('Poem', PoemSchema);
module.exports = Poem;
