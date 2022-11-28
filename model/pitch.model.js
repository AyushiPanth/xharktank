const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let pitchSchema = new Schema({
    entrepreneur: String,
    pitchTitle: String,
    pitchIdea: String,
    askAmount: Number,
    equity: Number,
}, {
    collection: 'pitches'
})
module.exports = mongoose.model('PitchSchema', pitchSchema)