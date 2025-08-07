$(function(){
    $(".answer").hide();
    $(".question").click(function(){
        $(this).next().slideToggle()
    });
});