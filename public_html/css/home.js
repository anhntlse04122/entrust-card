$(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval:false
    });
    
    //arrow button
     $('#arrownext').click(function() {
       $('#myCarousel').carousel('next');
 });
 
      $('#arrowprev').click(function() {
       $('#myCarousel').carousel('prev');
 });

// scroll slides on mouse scroll 
$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
			
			
        }
        else{
            $(this).carousel('next');
			
        }
    });

//scroll slides on swipe for touch enabled devices 

// 	$("#myCarousel").on("touchstart", function(event){
// 
//        var yClick = event.originalEvent.touches[0].pageY;
//    	$(this).one("touchmove", function(event){
//
//        var yMove = event.originalEvent.touches[0].pageY;
//        if( Math.floor(yClick - yMove) > 1 ){
//            $(".carousel").carousel('next');
//        }
//        else if( Math.floor(yClick - yMove) < -1 ){
//            $(".carousel").carousel('prev');
//        }
//    });
//    $(".carousel").on("touchend", function(){
//            $(this).off("touchmove");
//    });
//    
//});
    
 // collapse menu after click  
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});


// active menu after click

 $('.nav li').click(function() {
        $('.nav li').removeClass('active');
        $(this).addClass('active');
 });
 
 
});
//animated  carousel start
$(document).ready(function(){

//to add  start animation on load for first slide 
$(function(){
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
			 
//			 $('.item1.active h2').animateCss('zoomIn');
//			 $('.item1.active p').animateCss('fadeIn');
			 
});
	
//to start animation on  mousescroll , click and swipe



 
     $("#myCarousel").on('slide.bs.carousel', function () {
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
	
// animation type for text

//		$('.item1 h2').animateCss('zoomIn');
//		$('.item1 p').animateCss('fadeIn');
//		
//		$('.item2 h2').animateCss('swing');
//		$('.item2 p').animateCss('fadeIn');
//		
//		$('.item1 h2').animateCss('fadeInDown');
//		$('.item1 p').animateCss('fadeIn');
    });
});


$(document).ready(function(){
$('#myCarousel').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
if($('.firstOl').hasClass('active')){
$('body').addClass('slide1')
}else if($('.secondOl').hasClass('active')){
$('body').addClass('slide2')
}else if($('.thirdOl').hasClass('active')){
$('body').addClass('slide3')
}
});
})