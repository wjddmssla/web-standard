$("#slide ul li").hide();
$("#slide ul li:nth-child(1)").show();

setInterval(function(){
    $("#slide ul li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slide ul")
},3000);
// .end() -> 이전에 선택한 요소로 돌아가는 명령입니다.
// .appendTo() -> 선택된 요소를 부모 요소에 추가하는 역할을 합니다.