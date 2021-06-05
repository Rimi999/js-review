/******************** 글로벌 설정 *********************/
$('.sub-wrap').slideUp(0) //0은 즉시


/******************** 사용자 함수 *********************/


/******************** 이벤트 등록 *********************/
$('.click-navi > span').on('click', onNaviClick)
$('.hover-navi').on('mouseover', onNaviHover)
$('.hover-navi').on('mouseleave', onNaviLeave)



/******************** 이벤트 콜백 *********************/
function onNaviClick() {
	// $(this).next().stop().slidToggle(300)
	$(this).parent().find('.sub-wrap').stop().slideToggle(300)
}

function onNaviHover() {
	$(this).find('.sub-wrap').stop().slideDown(300)
}

function onNaviLeave() {
	$(this).find('.sub-wrap').stop().slideUp(300)
}