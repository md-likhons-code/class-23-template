jQuery(document).ready(function() {
    $(".popup").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,

        iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/Ir3ZxIadx7U?si=pOZFVHgdEh1rONRk'
              },
            },
            srcAction: 'iframe_src',
          }
    });

    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
    });

    $(".menu-btn").click(function() {
      $(".mobile-menu").slideToggle("slow");
    });

    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          $(".header-top").addClass("bg-[#f7f7f7] shadow-md");
      }else{
        $(".header-top").removeClass("bg-[#f7f7f7] shadow-md");
      }
    });
});