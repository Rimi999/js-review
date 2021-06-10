/*************** 글로벌 설정 *****************/
init()

/*************** 사용자 함수 *****************/
function init() {
	setTimeout(onSetTime, 2000)
}

/*************** 이벤트 등록 *****************/
function onSetTime() {
	$('.modal-wrapper').css('background-color','rgba(0,0,0,0)').show()
	$('.modal-wrapper').css('background-color') //애니메이션 효과를 위해서
	$('.modal-wrapper').css('background-color','rgba(0,0,0,0.8)')
	$('.modal-wrapper .modal-wrap').css('transform')
	$('.modal-wrapper .modal-wrap').css('transform','translate(-50%, -50%)')
}

/*************** 이벤트 콜백 *****************/

