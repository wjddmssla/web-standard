// slide
setInterval(function(){
    $('#slide ul').delay(2000);
    $('#slide ul').animate({
        marginLeft: '-1200px'
    },500)
    $('#slide ul').delay(2000);
    $('#slide ul').animate({
        marginLeft: '-2400px'
    },500)
    $('#slide ul').delay(2000);
    $('#slide ul').animate({
        marginLeft: '-3600px'
    },500)
    $('#slide ul').animate({
        marginLeft: '0px'
    },0)
});