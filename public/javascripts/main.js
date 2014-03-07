var fromLang = 'eng';
var toLang = '';

function randomWord(callback) {
    var requestStr = "http://randomword.setgetgo.com/get.php";

    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "jsonp",
        jsonpCallback: 'RandomWordComplete'
    });
}

function randomWordComplete(data) {
    alert(data.Word);
}




$(document).on('ready',function(){

    //For "translate" page:
    $('#langForm').on('submit', function(e){
        e.preventDefault();

        $.post('/translate', $('#langForm').serialize(),function(data){
            $('#coolWord').val(data.translation);
            $('#origLang').val(data.to);
            $('#newLang').val(data.from);
        });
    });

//    $('#quizForm').on('submit', function(e){
//        e.preventDefault();
//        console.log('test');
//
//        $.post('/quizanswers', $('#quizForm').serialize(),function(data){
//            console.log(data);
//        });
//    });

    $('#quizForm').on('submit', function(e){
        e.preventDefault();
        fromLang=$('#fromLang').val();
        $.post('/quiz/start',$('#quizForm').serialize(),function(data){
            //console.log($(data));
            $('#quizForm').empty().append($(data));
            $("#quizForm").attr('id','quizQuestion');
            randomWord(function myCallback(data){
                console.log(data);
                $("wordToTranslate").text(data.word);
            });
        });
    });

    $(document).on('submit','#quizQuestion', function(e){
        e.preventDefault();
        console.log("working");
    });

});

