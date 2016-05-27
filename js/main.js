$(document).ready(function(){ 
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('.carousel').carousel()
   

});
$('#contact').hover(function(){
     $(this).toggleClass("swing");
});
$('#contact').on("click",function(){
   $('#modal1').openModal();
});
$('.lang-logo').hover(function(){
    $(this).toggleClass("jello");
});
$('.selfie').hover(function() {
    $(this).toggleClass("rubberBand");
});
$('#comments').hover(function() {
   $("#comment-divider").toggleClass("comment-animation"); 
});



