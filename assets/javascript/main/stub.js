$(document).ready(function() {
    $('#menu1 > a').click(function() {
        $(this).toggleClass('active');
    });

    Ur.setup('._togglerContainer');

});

$(document).bind("DOMSubtreeModified", function(){
    
});



