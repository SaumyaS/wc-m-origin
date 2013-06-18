$(document).ready(function() {
    $('#menu1 > a').click(function() {
        $(this).toggleClass('active');
    });

    $(".lpadd_tocart").click(function(){
    	$(".messagepop").show();
    });

    $("._continueShop").click(function(){
    	$(".messagepop").hide();
    	return false;
    })


});