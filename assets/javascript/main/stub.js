$(document).ready(function() {
    $('#menu1 > a').click(function() {
        $(this).toggleClass('active');
    });
});

$("#createdBy").DOMNodeAppear(function() {
  Ur.setup("._togglerContainer");
});

$("#createNewRequisitionList").DOMNodeAppear(function(){
    $("._userInfo").prop('data-ur-state', 'disabled');
    alert("10");
});


