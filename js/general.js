// passage de la souris zoom sur les titres


$(document).ready(function(){
    $('h1').mouseleave(function(){
        $(this).css('transform', 'scale(10px)');
    });
    $('h2').mouseleave(function(){
        $(this).css('transform', 'scale(10px)');
    });
    $('.tchalla_div1').mouseleave(function(){
        $(this).css('transform', 'scale(10px)');
    });
   
    
});


