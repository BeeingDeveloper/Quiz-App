const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const quizModel = Schema({
    question: {type: String, required: true},
    option_A:{type: String, required: true},
    option_B:{type: String, required: true},
    option_C:{type: String, required: true},
    option_D:{type: String, required: true},
    correctANS:{type: String, required: true},
},{
    timestamps: true
});


module.exports = mongoose.model('quiz', quizModel);

