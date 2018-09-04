$(document).ready(function () {
// invoke the carousel
    $('#myCarousel').carousel({
        interval: false
    });

    //arrow button
    $('#arrownext').click(function () {
        $('#myCarousel').carousel('next');
    });

    $('#arrowprev').click(function () {
        $('#myCarousel').carousel('prev');
    });

// scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');


        } else {
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
    $(".navbar-nav li a").click(function (event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });


});
//animated  carousel start
$(document).ready(function () {

//to add  start animation on load for first slide 
    $(function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass(animationName);
                });
            }
        });

//			 $('.item1.active h2').animateCss('zoomIn');
//			 $('.item1.active p').animateCss('fadeIn');

    });

//to start animation on  mousescroll , click and swipe



// 
//     $("#myCarousel").on('slide.bs.carousel', function () {
//		$.fn.extend({
//			animateCss: function (animationName) {
//				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//				this.addClass('animated ' + animationName).one(animationEnd, function() {
//					$(this).removeClass(animationName);
//				});
//			}
//		});

// animation type for text

//		$('.item1 h2').animateCss('zoomIn');
//		$('.item1 p').animateCss('fadeIn');
//		
//		$('.item2 h2').animateCss('swing');
//		$('.item2 p').animateCss('fadeIn');
//		
//		$('.item1 h2').animateCss('fadeInDown');
//		$('.item1 p').animateCss('fadeIn');
//    });
});


$(document).ready(function () {
    $('#myCarousel').on('slid.bs.carousel', function () {
        if ($('#a1').hasClass('active')) {
            $('#s1').addClass('active');
            $('#s2').removeClass('active');
            $('#s3').removeClass('active');
            $('#s4').removeClass('active');
            $('#s5').removeClass('active');
            $('#s6').removeClass('active');
            $('#s7').removeClass('active');
            $('#s8').removeClass('active');
        } else if ($('#a2').hasClass('active')) {
           $('#s2').addClass('active');
            $('#s1').removeClass('active');
            $('#s3').removeClass('active');
            $('#s4').removeClass('active');
            $('#s5').removeClass('active');
            $('#s6').removeClass('active');
            $('#s7').removeClass('active');
            $('#s8').removeClass('active');
        } else if ($('#a3').hasClass('active')) {
            $('#s3').addClass('active');
            $('#s2').removeClass('active');
            $('#s1').removeClass('active');
            $('#s4').removeClass('active');
            $('#s5').removeClass('active');
            $('#s6').removeClass('active');
            $('#s7').removeClass('active');
            $('#s8').removeClass('active');
        } else if ($('#a4').hasClass('active')) {
            $('#s4').addClass('active');
            $('#s2').removeClass('active');
            $('#s3').removeClass('active');
            $('#s1').removeClass('active');
            $('#s5').removeClass('active');
            $('#s6').removeClass('active');
            $('#s7').removeClass('active');
            $('#s8').removeClass('active');
        } else if ($('#a5').hasClass('active')) {
            $('#s5').addClass('active');
            $('#s2').removeClass('active');
            $('#s3').removeClass('active');
            $('#s4').removeClass('active');
            $('#s1').removeClass('active');
            $('#s6').removeClass('active');
            $('#s7').removeClass('active');
            $('#s8').removeClass('active');
        } else if ($('#a6').hasClass('active')) {
            $('#s6').addClass('active');
            $('#s2').removeClass('active');
            $('#s3').removeClass('active');
            $('#s4').removeClass('active');
            $('#s5').removeClass('active');
            $('#s1').removeClass('active');
            $('#s7').removeClass('active');
            $('#s8').removeClass('active');
        } else if ($('#a7').hasClass('active')) {
            $('#s7').addClass('active');
            $('#s2').removeClass('active');
            $('#s3').removeClass('active');
            $('#s4').removeClass('active');
            $('#s5').removeClass('active');
            $('#s6').removeClass('active');
            $('#s1').removeClass('active');
            $('#s8').removeClass('active');
        } else if ($('#a8').hasClass('active')) {
            $('#s8').addClass('active');
            $('#s2').removeClass('active');
            $('#s3').removeClass('active');
            $('#s4').removeClass('active');
            $('#s5').removeClass('active');
            $('#s6').removeClass('active');
            $('#s7').removeClass('active');
            $('#s1').removeClass('active');
        }else if ($('#a0').hasClass('active')) {
            $('#s1').removeClass('active');
            $('#s2').removeClass('active');
            $('#s3').removeClass('active');
            $('#s4').removeClass('active');
            $('#s5').removeClass('active');
            $('#s6').removeClass('active');
            $('#s7').removeClass('active');
            $('#s8').removeClass('active');
        }
    });
});

$(document).ready(function(){


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    dots : true,
    nav : false,
    items : 5

});

});