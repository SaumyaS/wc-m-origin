$(document).ready(function() {
	$('#menu1 > a').click(function() {
		$(this).toggleClass('active');
	});
	$("#image-menu").on('click', function() {
		$("#pers-nav, #pers-nav-mask, #body-content").toggleClass("pers-nav-active");
	});
	
	$('.search-sidebar:contains("No further refinement")').slideUp("fast");

	$(".tabStrip-disabled").hide();

	$('#map-header').addClass("test");

	$("#PreviouslyProcessed1").click(function(){
		console.log("prev");
		$("._prev").show();
		$("._waiting").hide();
	});

	$("#trackOrderStatus").click(function(){
		console.log("prev");
		$("._prev").show();
		$("._waiting").hide();
	});

	$("#WaitingForApproval1").click(function(){
		console.log("wait");
		$("._prev").hide();
		$("._waiting").show();
	});

});

$("#createdBy").DOMNodeAppear(function() {
  Ur.setup("._togglerContainer");
});

$(".cart_check_btn").DOMNodeAppear(function () {

	var str = $(".cart_check_btn").text();
	var empty = "cart empty";
	var full = "cart checkout";
	str = str.toLowerCase();
	str = str.trim();
	
	if (str.localeCompare(empty) === 0) {
		$("#cart-image").attr("class", "_cart-empty");
	}
	if (str.localeCompare(full) === 0) {
		$("#cart-image").attr("class", "_cart-full");
	}
});

$(".closeText").DOMNodeAppear(function(){
	$('.closeText').hide();
});

$("._ajaxCalledAccount").DOMNodeAppear(function() {
	Ur.setup("._togglerInitialize");
});

$(".highslide-container").DOMNodeAppear(function(){
	$('.highslide-container').hide();
});

$("#mainTabContainer_tablist").DOMNodeAppear(function(){
	$('#mainTabContainer_tablist').hide();
});



