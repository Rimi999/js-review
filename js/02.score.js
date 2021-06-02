/***************** 글로벌 설정 *******************/
var scores = []


/***************** 사용자 함수 *******************/


/***************** 이벤트 등록 *******************/


/***************** 이벤트 콜백 *******************/
function onScoreSubmit(f) {
	// var f = document.scoreFom으로 접근가능
	var	name = f.name.value
	var	kor = Number(f.kor.value)
	var	eng = Number(f.eng.value)
	var	math = Number(f.math.value)
	
	return false
}
