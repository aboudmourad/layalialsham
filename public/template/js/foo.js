$(document).ready(function() {
    initHeaderButtom();
    initScroll();
    initSwipbox();
    initSlider();
    initMenu();
    $().UItoTop({ easingType: 'easeOutQuart' });
 
});


function initHeaderButtom(){
    let navoffeset;
    if($(".header-bottom").length){
         navoffeset=$(".header-bottom").offset().top;
    }
        $(window).scroll(function(){
           const scrollpos=$(window).scrollTop(); 
         
           if($(".header-bottom").length){
           if(scrollpos > navoffeset){
               $(".header-bottom").addClass("fixed");
           } else {
               $(".header-bottom").removeClass("fixed");
           }
        }
        });

}
function initScroll(){
    $(".scroll").click(function(event){	  
    if(window.location.pathname === "/"){	
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
         }
    });
}

function initSwipbox(){
        $(".swipebox").swipebox();
}


function initSlider() {
    $("#slider").responsiveSlides({
        auto: true,
        nav: true,
        speed: 500,
      namespace: "callbacks",
      pager: true,
    });
};


function initMenu(){
  $("span.menu").click(function(){
    $(".top-menu ul").slideToggle("slow" , function(){
         });
    });
}

   


function initJqueriesPlugins(){
    window.scrollTo(0,0)
    initScroll();
    initSwipbox();
    initSlider();
    initMenu();
    initHeaderButtom();
}
