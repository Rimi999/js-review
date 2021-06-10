/*************** 글로벌 설정 *****************/
var prds        // 상품 리스트 (배열)
var $listWrap   // $('.list-wrap')
var $lisr       // $('.list-wrap > .list')
init()


/*************** 사용자 함수 *****************/
function init(){
	prds = [
		{ id: 1, src: '../img/cherries.jpg', title: '맛있는 체리', desc: '체리'},
		{ id: 1, src: '../img/croissant.jpg', title: '맛있는 빵', desc: '빵'},
		{ id: 1, src: '../img/popsicle.jpg', title: '맛있는 크림', desc: '크림'},
		{ id: 1, src: '../img/salmon.jpg', title: '맛있는 연어', desc: '연어'},
		{ id: 1, src: '../img/sandowich.jpg', title: '맛있는 샌드위치', desc: '샌드위치'},
		{ id: 1, src: '../img/steak.jpg', title: '맛있는 스테이크', desc: '스테이크'},
		{ id: 1, src: '../img/wine.jpg', title: '맛있는 와인', desc: '와인'}
	]
}

/*************** 이벤트 등록 *****************/
$('.bt-create').clik(onCreate)
$('.bt-remove').clik(onRemove)


/*************** 이벤트 콜백 *****************/
function onCreate() {

}

function onRemove() {

}
