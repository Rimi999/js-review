/***************** 글로벌 설정 *******************/
var scores = []


/***************** 사용자 함수 *******************/
function scoreRender() {
	//테이블에 점수 등록
	var i,html
	for(i=0; i<scores.length;i++){
		html  = '<tr>'
		html += '<td>'+(i+1)+'</td>'
		html += '<td>'+scores[i].name+'</td>'
		html += '<td>'+scores[i].kor+'점</td>'
		html += '<td>'+scores[i].eng+'점</td>'
		html += '<td>'+scores[i].math+'점</td>'
		html += '<td>'+scores[i].total+'점</td>'
		html += '<td>'+scores[i].avg+'점</td>'
		html += '<td>등</td>'
		html += '<td>'
		html += '<button class="bt-change">수정</button>'
		html += '<button class="bt-remove">삭제</button>'
		html += '</td>'
		$('.score-tb tbodt').append(html)
	}
}

/***************** 이벤트 등록 *******************/


/***************** 이벤트 콜백 *******************/
function onScoreSubmit(f) {
	// var f = document.scoreFom으로 접근가능

	//데이터 저장
	var	name = f.name.value.trim() //trim 공백제거 
	var	kor = f.kor.value.trim()   //문자열 안에있는 공백은 X
	var	eng = f.eng.value.trim()
	var	math = f.math.value.trim()
	
	//데이터 검증
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

	//데이터 수정
	//검증완료후 숫자로 변환
	kor = Number(kor)
	eng = Number(eng)
	math = Number(math)
	total = kor + eng + math
	avg = Number( (total/3).toFixed(2) )


	//배열에 데이터 저장
	scores.push({
		name: name,
		kor: kor,
		math: math,
		total: total,
		avg: avg
	})

	//form 초기화
	f.reset()

	// 데이터를 화면에 표현
	scoreRender()


	return false

}
