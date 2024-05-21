$(document).ready(function(){

    // Hover Menu item
   
//    $('.dropdown_menu').hover(function() {
//       $('.dropdown_items').toggleClass('show');
//     });



 








 //        // Mobile Menu Icon and Outside click none 

    const menuContainer = $(".header_nav");
        const menuToggle = $("#nav-icon");
        const menu = $(".header_nav nav");
        const menuIcon = $("#nav-icon");
        const overlyArea = $(".overly");
        if (menuToggle.length) {
            menuToggle.on("click", function(event) {
                event.stopPropagation();
                menu.toggleClass("active_nav");
                menuToggle.toggleClass("active_nav");
                menuIcon.toggleClass("open");
                overlyArea.toggleClass("active");
            });
        }
        $(document).on("click", function(event) {
            const target = $(event.target);
            if (menuContainer.length && !menuContainer.is(target) && !menuContainer.has(target).length) {
                menu.removeClass("active_nav");
                menuIcon.removeClass("open");
                if (menuToggle.length) {
                    menuToggle.removeClass("active_nav");
                    menuIcon.removeClass("open");
                    overlyArea.removeClass("active");
                }
            }
        });



     // mixitup plugin
    var containerEl = document.querySelector('.studies_mix'); 
    var mixer = mixitup(containerEl, {
        load: {
            filter: 'all'
        },
        animation: {
            effectsIn: 'fade translateY(-100%)',
            effects: 'fade translateZ(-100px)'
        }
    });









});




 
    // Clients Says Slider
 var swiper = new Swiper(".banner_slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
       delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
   
    
 });

 
    // Clients Says Slider
 var swiper = new Swiper(".clients_says_slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
       delay: 4000,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    
 });



 
    // Blog Slider
 var swiper = new Swiper(".blog_slider", {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //    delay: 4000,
    // },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    
 });

 



  
    //  Business Slider
    var swiper = new Swiper(".business_slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
        delay: 4000,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        
    });
  
    //  Business Slider
    var swiper = new Swiper(".banner_slide_items", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
        delay: 8000,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        
    });


  
    //  fight Slider
    var swiper = new Swiper(".fight_slider", {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoplay: {
        delay: 4000,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            },
            450: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
         }
        
    });














