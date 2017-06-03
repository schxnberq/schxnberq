(function ($, undefined) {
    $(document).ready(function () {


        /*var sparklebg = function (paths) {

         var randomPath = Math.floor(Math.random() * 41);

         paths.eq(randomPath).addClass('coloredpath');

         var isColored = paths.closest('g').find('.coloredpath');


         if (isColored.length >= 20) {
         isColored.removeClass('coloredpath');
         paths.eq(randomPath).addClass('coloredpath');

         }
         }*/


        // Logo + Text Animation
        var $logopath = $('.svg-cnt path');
        var $fillsvg = $('.fill-svg path');
        var $spanslide1 = $('.entry__title__txt span:first');
        var $spanslide2 = $('.entry__title__txt span:last');

        setTimeout(function () {
            $spanslide1.addClass('slideUp');
            $spanslide2.addClass('slideDown');
            $('.entry__scroll a').addClass("fadeInDown");
        }, 2350);

        setTimeout(function () {
            $($logopath).animate({
                'opacity': 0
            }, 350)
            $('.svg-cnt').find('polyline').animate({
                'opacity': 0
            }, 350)
            $fillsvg.animate({
                "fill-opacity": 1
            }, 450)
        }, 2850);


        var scrollFadeEl = document.querySelector('.scroll-fade');
        var worknav = document.querySelector('.work-nav');

        window.onscroll = function () {


        };


        $(".pages__tab a").on("click", function (e) {
            e.preventDefault();

            var currHref = $(this).attr("href");

            console.log(currHref)

        })

        window.onscroll = function () {
            /*sparklebg($(".bg-top path"));
             sparklebg($(".bg-bottom path"));*/


            /*$(".bg-bottom svg").css(
             "transform", "translateY(" + $(window).scrollTop() / 50 + "px" + ")"
             )

             $(".bg-top svg").css(
             "transform", "translateY(" + $(window).scrollTop() / 10 + "px" + ")"
             )*/

            var bgBottom = document.querySelector(".bg-bottom svg");
            var bgTop = document.querySelector(".bg-top svg");

            var bgbottomanim = "translateY(" + window.pageYOffset / 50 + "px" + ")";
            var bgtopanim = "translateY(" + window.pageYOffset / 10 + "px" + ")";

            bgBottom.style.transform = bgbottomanim;
            bgTop.style.transform = bgtopanim;

            scrollFadeEl.style.opacity = "1" - window.pageYOffset / 350;
            worknav.style.opacity = "0" + window.pageYOffset / 400;
        };


    });
})(jQuery);
