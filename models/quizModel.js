/**
 * Created by student on 3/6/14.
 */


//
//
//english: ['hello','cat','dog','food','goodbye','water','cheese','pencil','book','ship'],
//french: [ 'bonjour','cat','chien','la nourriture','au revoir','l\'eau','fromage','crayon','livre','navire' ]

var mongoose = require('mongoose');
var quizSchema = mongoose.Schema({
    userID: String,
    quizWords: Array,
    quizAnswers: Array,
    score: Number
});

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;