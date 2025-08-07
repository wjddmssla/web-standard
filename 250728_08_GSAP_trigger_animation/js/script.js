gsap.registerPlugin(ScrollTrigger);
gsap.to(".box1", {
    x: 500,
    y: 200,
    scale: 2,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 20%",
        end: "bottom 80%",
        scrub: 3,
        markers: false,
        toggleClass: 'bg'
    }
});

gsap.to(".section2 p", {
    x: 500,
    // y: 200,
    rotation: 360,
    scrollTrigger: {
        trigger: ".section2",//요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
        start: "-200px top",//트리거에 대한 애니메이션이 언제 시작될지를 정의합니다. 이 경우 트리거 요소의 맨 위가 뷰포트의 맨 위에 도달했을 때 시작합니다.
        //왼쪽은 대상 트리거, 오른쪽은 시야
        end: "800px bottom",//애니메이션 종료시점
        scrub: 3,//true 또는 숫자를 입력한다(숫자가 클수록 부드러워짐)
        // 핀 지정 효과가 스크롤에 따라 얼마나 빠르게 따라가는지를 결정합니다. 0.5의 값은 스크롤의 절반 속도로 이동합니다.
        pin: true,// 트리거가 작동될 때 요소를 뷰포트에 핀으로 고정시킵니다.
        pinSpacing: true, // 핀 지정된 요소의 간격을 자동으로 조정할지 여부를 지정합니다. 이 값을 false로 설정하면 핀 지정된 요소의 간격이 자동으로 조정되지 않습니다.
        markers: false //개발 가이드선 활성화 여부를 지정합니다.
    }
});

gsap.to(".box3", {
    duration: 2,
    x: 700,
    y: 100,
    rotation: 360,
    borderRadius: 100,
    scrollTrigger: {
        trigger: ".box3",
        start: "-400px top",
        end: "600px bottom",
        scrub: 2,
        markers: true,
    }
});

gsap.to(".section4", {
    scrollTrigger: {
        trigger: '.bg2', //객체 기준범위
        start: '-300px 30%', //start와 end의 앞 숫자는 객체의 기준점 설정(ex.10%으로 하면 '.bg2'의 상단부터 10%가 기준점), 뒷 숫자는 화면상의 트리거 설정(ex.25%로 하면 '.bg2'의 시작 기준점이 상단부터 25% 지나면 모션 적용)
        end: '700px 70%',
        toggleClass: 'widthAni', //추가할 클래스명
        markers: false
    }
});

// Section2 - scroll motion
gsap.timeline({  
    scrollTrigger: {
      trigger: ".section5", // 객체기준범위
      pin: true, // 고정
      start: "top top", // 시작점
      end: "bottom bottom", // 끝점
      scrub: 0.5, // 모션바운스
      markers: false, // 개발가이드선
      onLeave: function(){ // 끝나는지점 callback함수
        console.log('end');
      }
    }
  })
  .to('.sec2_tit1', {duration: 0.3, opacity: 0, y: -30})
  
  .to('.sec2_tit2', {duration: 0.3, opacity: 1, y: 0, onComplete: function(){
    console.log('두번째 문구등장!');
  }})
  .to('.sec2_tit2', {duration: 0, delay: 1})
  .to('.sec2_tit2', {duration: 0.3, opacity: 0, y: -30})
  .to('.sec2_tit3', {duration: 0.3, opacity: 1, y: 0}) 
  .to('.sec2_tit3', {duration: 0, delay: 1})
