$('.bt-show').click(function() {
	$('.hero').stop().show(1000)
}) //.stop()은 쌓인 액션이 반복 되지않도록 함

$('.bt-hide').on('click', function() {
	$('.hero').stop().hide(1000)
})