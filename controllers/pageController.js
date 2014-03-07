/**
 * Created by student on 3/6/14.
 */
module.exports = {

    index:  function(req, res){
        res.render('index', {title: "Quiz App"});
    },

    translate:  function(req, res){
        res.render('translate');
    },

    progress:  function(req, res){
        res.render('progress', {title: "Progress"});
    },

    quiz:  function(req, res){
        res.render('quiz', {title: "Quiz"});
    }




};