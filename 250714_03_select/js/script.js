$(".option").hide();

$(".select_btn").click(function(){
    $(".option").slideToggle()
    $(".select_btn span").toggleClass("turn")
});