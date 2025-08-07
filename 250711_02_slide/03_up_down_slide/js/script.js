setInterval(function(){
    $('#slide ul').delay(2000);
    
    $('#slide ul').animate({
        marginTop: '-300px'
    },500)

    $('#slide ul').delay(2000);

    $('#slide ul').animate({
        marginTop: '-600px'
    },500)

    $('#slide ul').delay(2000);

    $('#slide ul').animate({
        marginTop: '-900px'
    },500)

    $('#slide ul').animate({
        marginLeft: '0px'
    },0)
});