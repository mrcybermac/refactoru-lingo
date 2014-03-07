/**
 * Created by student on 3/6/14.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    quizzesCompleted: Number,
    quizzesPassed: Number,
    quizzesFailed: Number,
    quizzesPassedPercent: Number,
    quizzesFailedPercent: Number,
    wordsTranslatedCorrectly: Number,
    wordsTranslatedIncorrectly: Number,
    bestTenWords: Array,
    worstTenWords: Array,

});

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;