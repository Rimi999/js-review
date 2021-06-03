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