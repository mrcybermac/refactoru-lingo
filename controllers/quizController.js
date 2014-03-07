/**
 * Created by student on 3/6/14.
 */

// setup
var QuizModel = require('../models/userModel.js');

var async = require('async');

var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
    api_token: 'to8Qp3sn88IibzvsJG1Psg%3D%3D'
});


//helper methods

var translateWord = function (fromLang, toLang, word, callback) {
    beglobal.translations.translate({
            text: word,
            from: fromLang,
            to: toLang
        }, function (err, result) {
            callback(err, result);
        }
    )
};


module.exports = {

    translateWord: function (req, res) {
        translateWord(req.body.fromLang, req.body.toLang, req.body.word, function (err, result){
            if (err) return console.log(err);
            res.send(result);
        });
    },

    startQuiz: function (req, res) {
        res.render('quizQuestion', {fromLang: req.body.fromLang});
//        var newQuiz = new QuizModel({
//            userID: 1,
//            quizWords: ['hello','cat','dog','food','goodbye','water','cheese','pencil','book','ship'],
//            quizAnswers: [],
//            quizTranslations: ['bonjour','cat','chien','la nourriture','au revoir','l\'eau','fromage','crayon','livre','navire']
//        })
    }
};