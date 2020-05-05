$(document).ready(function(){
    
    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.menu-place'
    });
      
$('.slider-active').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});	
    
$('.project-active').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    margin: 0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});	
    	
$('.popup-vid').magnificPopup({
  type: 'iframe'
  // other options
});
    
$('.blog-active').owlCarousel({
    loop:true,
    autoplay:false,
    smartSpeed:1000,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});	
    
$('.testimonial-active').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});	
    
$('.brand-active').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    margin: 0,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
});
    
});