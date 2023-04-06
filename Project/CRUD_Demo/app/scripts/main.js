$(function() {
	$('[data-toggle="popover"]').popover();
	window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('needs-validation')
		Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault()
					event.stopPropagation()
				}
				form.classList.add('was-validated')
			}, false)
		})
	}, false)
	$('#cardNumber').mask('0000 0000 0000 0000');
	$('.date-valid').mask('00');
	$('#ccv').mask('000');
});

function del(e) {
	$(e).parentsUntil('tbody').remove()
	doCount();
}

$('.custom-select').on('change', function() {
	var thisVal = $(this),
		_singlePrice = $(this).parent().next().find('span').attr('value'),
		_price = 0;
	_price = parseFloat(_singlePrice * thisVal.val()).toFixed(2);
	$(this).parent().next().find('span').text(_price);
	doCount();
})

function doCount() {
	var sum = 0
	$('.price').each(function(i, val) {
		var coupon = parseFloat($(val).parent().prev().prev().find('span').text()),
			price = $(val).text();
		if(!isNaN(coupon))
			sum = sum + parseFloat(price - (price * coupon / 100));
		else
			sum = sum + parseFloat(price - (price * 0));
	});
	$('.total').text(sum.toFixed(2));
}
