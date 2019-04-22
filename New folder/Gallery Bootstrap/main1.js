$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "fade",
        closeEffect: "zoomOut"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
    });
//____SWIPER___START


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    zoom: {
      maxRatio:2,
      toggle:true,
      zoomedSlideClass:'zoom-img',
    },
 
    
    
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
 
var currentMouseX=0;
  $(".imgBox ,img").hover(function(e){
    console.log(e.clientX);
    if (currentMouseX ===0 ) {
      currentMouseX=e.clientX;
    }
    else{
      if (e.clientX>currentMouseX ) {
        swiper.slideNext(2000);
      }
      if (e.clientX<currentMouseX ) {
        swiper.slidePrev(2000);
      }
    }

  });
  $(".imgBox ,img").mouseout(function(e){
    currentMouseX=0;
  });
  
////_______Swiper______END


// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});



});



    