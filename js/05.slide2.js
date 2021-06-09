/*************** 글로벌 설정 *****************/
var idx = 0


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('.bt-prev').on('click', onPrev)
$('.bt-next').on('click', onNext)


/*************** 이벤트 콜백 *****************/
function onPrev() {

}
function onNext() {
	idx = (idx === 4)? 0 : idx + 1
	$('.slide-wrap').stop().animate({'left':(idx*-100)+'%'}, 1000)
}
