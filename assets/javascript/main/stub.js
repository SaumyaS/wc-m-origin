$(document).ready(function() {
    $('#menu1 > a').click(function() {
        $(this).toggleClass('active');
    });

    $("._descriptionButton").click(function(){
        alert("hello");
        $("._descriptionText").toggle('slow');
    });


   

});

// $(document).ready(function(){
//      $("._descriptionButton").click(function(){
//         $("._descriptionText").toggle('slow');
//     });
// })

function test(){
    alert("hello");
}