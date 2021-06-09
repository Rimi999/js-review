/*************** 글로벌 설정 *****************/
var idx = 0, len, lastId
init()


/*************** 사용자 함수 *****************/
function init() {
	$('.slide-wrap').append( $('.slide-wrap > .slide').eq(0).clone() )
	len = $('.slide-wrap .slide').length
	lastIdx = len - 1
}


/*************** 이벤트 등록 *****************/
$('.bt-prev').on('click', onPrev)
$('.bt-next').on('click', onNext)


/*************** 이벤트 콜백 *****************/
function onPrev() {
	if(idx === 0) {
		idx = lastIdx - 1
		$('.slide-wrap').css('top', -(lastIdx * 100)+'%')
	}
	else idx--
		$('.slide-wrap').stop().animate({'top': -(idx * 100)+'%'}, 500)
}

function onNext() {
	if (idx === lastIdx) {
		idx = 1 //0은 보이고 있는 상태라 한번 멈춤
		$('.slide-wrap').css('top', 0)
	}
	else idx++
	$('.slide-wrap').stop().animate({'top': -(idx * 100)+'%'}, 500)
}
