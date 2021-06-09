/*
i++ (후의연산자) // i = i + 1
++i (전의연산자) // i = i + 1
i += 1 // i = i + 1
i += 5 // i = i + 5

var i=0
console.log(i++) // 0
console.log(i++) // 1
console.log(i++) // 2

var i=0
console.log(++i) // 1
console.log(++i) // 2
console.log(++i) // 3
*/
/*

*/ 
/*************** 글로벌 설정 *****************/
var idx = 0  //현재 맨 위에 나타나는 .slide의 index
var zIdx = 2 //맨 위에 나타나는 .slide의 z-index
var lastIdx = $('.slide-wrap .slide').length - 1
$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('slide-stage .bt-prev').on('click', onPrevClick)
$('slide-stage .bt-next').on('click', onNextClick)


/*************** 이벤트 콜백 *****************/
function onPrevClick(){
	if(idx === 0) idx = lastIdx
	else idx--
	('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)
}

function onNextClick(){
	if(idx === lastIdx) idx = 0
	else idx++
	('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)
}
