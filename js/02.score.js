/***************** 글로벌 설정 *******************/
var scores = []


/***************** 사용자 함수 *******************/


/***************** 이벤트 등록 *******************/


/***************** 이벤트 콜백 *******************/
function onScoreSubmit(f) {
	// var f = document.scoreFom으로 접근가능
	var	name = f.name.value.trim() //trim 공백제거 
	var	kor = f.kor.value.trim()   //문자열 안에있는 공백은 X
	var	eng = f.eng.value.trim()
	var	math = f.math.value.trim()
	if(name ===''){
		alert('이름을 입력하세요.')
		f.name.focus()
		return false //중복 알림이 안 뜨도록
	}
	if(kor ===''){
		alert('국어 점수를 입력하세요.')
		f.kor.focus()
		return false
	}
	if(eng ===''){
		alert('영어 점수를 입력하세요.')
		f.eng.focus()
		return false
	}
	//검증완료후 숫자로 변환
	kor = Number(kor)
	eng = Number(eng)
	math = Number(math)
	total = kor + eng + math
	avg = Number( (total/3).toFixed(2) )

	//배열에 넣기
	scores.push({
		name: name
		kor: kor,
		math: math,
		total: total,
		avg: avg
	})

	return false

}
