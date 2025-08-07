$(function(){
    $(".submenu").hide();
    $(".gnb li").mouseenter(function(){
        $(this).children(".submenu").stop().slideDown()
    })
    $(".gnb li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp()
    })
});