$(document).ready(function() {

	$("#image-menu").on('click', function() {
		$("#pers-nav, #pers-nav-mask, #body-content").toggleClass("pers-nav-active");
	});

	$('.search-sidebar:contains("No further refinement")').slideUp("fast");

	$(".tabStrip-disabled").hide();

	$("#PreviouslyProcessed1").on('click',function(){
		$("._prev").show();
		$("._waiting").hide();
	});

	$("#trackOrderStatus").on('click',function(){
		$("._prev").show();
		$("._waiting").hide();
	});

	$("#WaitingForApproval1").on('click',function(){
		$("._prev").hide();
		$("._waiting").show();
	});

	$(".category-item:empty").remove();
	$("._industries:empty").remove();

	$("div").filter(function(){
	    return $.trim(this.innerHTML) === "&nbsp;";
	}).remove();

		// $(".dijitTooltipLeft").attr("class", "dijitTooltipBottom");

	$("#WC_UserRegistrationAddForm_links_1").click(function(){
		$(".dijitTooltipRight").attr("class", "dijitTooltipLeft");
	});
	$(".dijitTooltipLeft").click(function(){
		console.log("i was clicked");
		$(this).attr("class", "dijitTooltipRight");
	});
	$(".dijitTooltipLeft").attr("class", "dijitTooltipRight");




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
		$("#cart-image").attr("class", "Icons-cart-empty");
	}
	if (str.localeCompare(full) === 0) {
		$("#cart-image").attr("class", "Icons-cart-full");
	}
});

$(".close").DOMNodeAppear(function(){
	$('.close').hide();
});

$("#free_gifts_popup_div_6").DOMNodeAppear(function(){
	$('#free_gifts_popup_div_6').hide();
});

$(".closeText").DOMNodeAppear(function(){
	$('.closeText').hide();
});

$("#CVVDetailsSection").DOMNodeAppear(function() {
	Ur.setup("#CVVDetailsSection");
});

$("._ajaxCalledAccount").DOMNodeAppear(function() {
	Ur.setup("._togglerInitialize");
});

$("._companyInfoContainer").DOMNodeAppear(function() {
	Ur.setup("._companyInfoContainer");
});

$("._orderDetails").DOMNodeAppear(function() {
	Ur.setup("._togglerBillContainer");
	Ur.setup("._togglerShipContainer");
	Ur.setup("._orderSummaryContainer");
});

$(".highslide-container").DOMNodeAppear(function(){
	$('.highslide-container').hide();
});

$("#mainTabContainer_tablist").DOMNodeAppear(function(){
	$('#mainTabContainer_tablist').hide();
});


