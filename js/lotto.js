/***************** 글로벌 설정 *******************/


/***************** 사용자 함수 *******************/


/***************** 이벤트 등록 *******************/
$('#bt-lotto').on('click', onLotto)


/***************** 이벤트 콜백 *******************/
function onLotto () {
	var numbers = [], n, i, color //변수 선언

	//while(조건문) : 조건이 ture일때 까지 반복
	// 랜덤번호 6개 추출
	while(numbers.length < 6) {	
		n = Math.floor(Math.random() * 45) + 1;
		if(numbers.indexOf(n) === -1) numbers.push(n)
	}

	// 추출된 번호를 오름차순으로 정렬
	numbers.sort(function(a, b) { return a - b })
	// 내림 차순 nunbers.sert( function(a,b) { return b - a } )
	
	$('.disp-wrapper .display').empty() //.display에 표현
	for(i=0; i<6; i++) {
		if(numbers[i] <= 10) {color ='yellow'}
		else if(numbers[i] <= 20) {color ='blue'}
		else if(numbers[i] <= 10) {color ='red'}
		else if(numbers[i] <= 10) {color ='grey'}
		else {color ='green'}
		$('.disp-wrapper .display').append(
			'<li class="ball" '+color+'"> '+numbers[i]+' <li>')
			// 부호 잘 확인하기
	}


}	