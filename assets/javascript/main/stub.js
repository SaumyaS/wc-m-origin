$(document).ready(function() {
    $('#menu1 > a').click(function() {
        $(this).toggleClass('active');
    });

   

});

$(document).bind("DOMSubtreeModified", function(){
     Ur.setup('._togglerContainer');
});



