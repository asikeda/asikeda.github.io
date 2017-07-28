$(document).ready(function(){
	$("#resurface").hide();
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 500) {
			$("#nav-bar").addClass("nav-top");
			$("a[href='#about']").addClass("nav-active");
		} else {
			$("#nav-bar").removeClass("nav-top");
			$("a[href='#about']").removeClass("nav-active");
		};
		if ($(window).scrollTop() >= 1580) {
			$("a[href='#about']").removeClass("nav-active");
			$("a[href='#resume']").addClass("nav-active");
		} else {
			$("a[href='#resume']").removeClass("nav-active");
		};
		if ($(window).scrollTop() >= 3160) {
			$("a[href='#resume']").removeClass("nav-active");
			$("a[href='#skills']").addClass("nav-active");
		} else {
			$("a[href='#skills']").removeClass("nav-active");
		};
		if ($(window).scrollTop() >= 3840) {
			$("a[href='#skills']").removeClass("nav-active");
			$("a[href='#portfolio']").addClass("nav-active");
		} else {
			$("a[href='#portfolio']").removeClass("nav-active");
		};
		if ($(window).scrollTop() + $(window).height() >= $(document).height()-100) {
			$("a[href='#portfolio']").removeClass("nav-active");
			$("a[href='#contact']").addClass("nav-active");
		} else {
			$("a[href='#contact']").removeClass("nav-active");
		};
		if ($(window).scrollTop() < 500) {
			$("#resurface").fadeOut();
		} else {
			$("#resurface").fadeIn();
		};
	});


	$("a[href^='#']").click(function() {
		$("html, body").animate({
			scrollTop: $($.attr(this,"href")).offset().top-(10+$(".h1").outerHeight(true))
		}, 500);
	});


});