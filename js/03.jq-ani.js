/**** display ****/
// show(속도, 애니메이션 완료 후 할 기능)
// show( (ms/'slow'/'fast'),  fn)

$('.bt-show').click(function() {
	$('.hero').stop().show(1000)
}) //.stop()은 쌓인 액션이 반복 되지않도록 함

$('.bt-hide').on('click', function() {
	$('.hero').stop().hide(1000)
})

$('.bt-toggle').on('click', function() {
	$('.hero').stop().toggle(1000)
})


/**** fade ****/
$('.bt-fade-in').click(function() {
	$('.hero').stop().fadeIn()
})

$('.bt-fade-out').on('click', function() {
	$('.hero').stop().fadeOut()
})

$('.bt-fade-toggle').on('click',function() {
	$('.hero').stop().fadeToggle()
})


/**** slide ****/
$('.bt-slide-down').click(function() {
	$('.hero').stop().slideDown()
})

$('.bt-slide-up').on('click', function() {
	$('.hero').stop().slideUp()
})

$('.bt-slide-toggle').on('click',function() {
	$('.hero').stop().slideToggle()
})

// $('대상').stop().animate({애니메이션}, 속도, 타입, 콜백)
// 속도: Number 	- ms
// 타입: String 	- 'swing', 'linear'
// 콜백: Function - 애니메이션이 끝난 후 작동할 동작
/*
backgroundPositionX
backgroundPositionY
borderWidth
borderBottomWidth
borderLeftWidth
borderRightWidth
borderTopWidth
borderSpacing
margin
marginBottom
marginLeft
marginRight
marginTop
opacity
outlineWidth
padding
paddingBottom
paddingLeft
paddingRight
paddingTop
height
width
maxHeight
maxWidth
minHeight
minWidth
fontSize
bottom
left
right
top
letterSpacing
wordSpacing
lineHeight
textIndent
*/