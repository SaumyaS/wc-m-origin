$(document).ready(function() {
	$('#menu1 > a').click(function() {
		$(this).toggleClass('active');
	});
	$("#image-menu").on('click', function() {
		$("#pers-nav, #pers-nav-mask, #body-content").toggleClass("pers-nav-active");
	});
	
	$('.search-sidebar:contains("No further refinement")').slideUp("fast");

   
		
	pageSize();
	

});

$("#createdBy").DOMNodeAppear(function() {
  Ur.setup("._togglerContainer");
});

$("#createNewRequisitionList").DOMNodeAppear(function(){
	$("._userInfo").prop('data-ur-state', 'disabled');
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

var pageSize = function(){
	var URL = document.URL;
	var key = getUrlVars(URL)["pageSize"];
	console.log(key);
	if(!window.location.hash){
		if(key != 12 && URL.indexOf("pageSize") > -1){
			var newSize = 12;
			var newURL = URL.replace(/(pageSize=).*?(&)/,'$1' + newSize + '$2');
			console.log(newURL);
			this.document.location.href = newURL;
		}
	}

	
}

function getUrlVars(URL) {
	var vars = {};
	var parts = URL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}
