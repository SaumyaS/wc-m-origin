$(document).ready(function() {
    $('#menu1 > a').click(function() {
        $(this).toggleClass('active');
    });
    $("#image-menu").on('click', function() {
    	$("#pers-nav, #pers-nav-mask, #body-content").toggleClass("pers-nav-active");
  	});
});

$("#createdBy").DOMNodeAppear(function() {
  Ur.setup("._togglerContainer");
});

$("#createNewRequisitionList").DOMNodeAppear(function(){
    $("._userInfo").prop('data-ur-state', 'disabled');
});


