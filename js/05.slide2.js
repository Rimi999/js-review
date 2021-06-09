/*************** 글로벌 설정 *****************/
var idx = 0
var lastIdx = $('.slide-wrap .slide').length - 1

/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('.bt-prev').on('click', onPrev)
$('.bt-next').on('click', onNext)


/*************** 이벤트 콜백 *****************/
function onPrev() {
	if(idx === 0) {
		idx = lastIdx - 1
		$('.slide-wrap').css('left', -(lastIdx * 100)+'%')
	}
	else idx--
		$('.slide-wrap').stop().animate({'left': -(idx * 100)+'%'}, 500)
}

function onNext() {
	if (idx === lastIdx) {
		idx = 1 //0은 보이고 있는 상태라 한번 멈춤
		$('.slide-wrap').css('left', 0)
	}
	else idx++
	$('.slide-wrap').stop().animate({'left': -(idx * 100)+'%'}, 500)
}
