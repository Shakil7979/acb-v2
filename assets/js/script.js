$(document).ready(function(){  

  // Mobile Menu Icon and Outside click none 

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
 


});


 











