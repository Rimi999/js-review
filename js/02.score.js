/***************** 글로벌 설정 *******************/
var scores = []


/***************** 사용자 함수 *******************/


/***************** 이벤트 등록 *******************/


/***************** 이벤트 콜백 *******************/
function onScoreSubmit(f) {
	// var f = document.scoreFom으로 접근가능
	var	name = f.name.value
	var	kor = f.kor.value
	var	eng = f.eng.value
	var	math = f.math.value
	if(name ===''){
		alert('이름을 입력하세요.')
		return false
	}
	if(kor ===''){
		alert('국어 점수를 입력하세요.')
		return false
	}
	if(eng ===''){
		alert('영어 점수를 입력하세요.')
		return false
	}
	return false
}
