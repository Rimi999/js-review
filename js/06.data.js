/*************** 글로벌 설정 *****************/
var prds        // 상품 리스트 (배열)
var $listWrap   // $('.list-wrap')
var $list       // $('.list-wrap > .list')
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
	$listWrap = $('.list-wrap')
}


/*************** 이벤트 등록 *****************/
$('.bt-create').click(onCreate)
$('.bt-remove').click(onRemove)


/*************** 이벤트 콜백 *****************/
function onCreate() {
	var html
	html += '<li class="list card">'
	html += '<img class="card-img-top" src="../img/300.png">'
	html += '<div class="card-body">'
	html += '<h4 class="card-title">Title</h4>'
	html += '<p class="card-text">Text</p>'
	html += '</div>'
	html += '</li>'
	$listWrap.append(html)
}

function onRemove() {

}
