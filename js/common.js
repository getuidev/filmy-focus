$(document).ready(function () {
    $(".search-icon").click(function () {
        $("#headerSearch").fadeToggle();
    });
    $("#toggleNav").click(function () {
        $("#megaMenu").slideToggle("slow", function () {
            if ($("#megaMenu").is(":visible")) {
                $("body").addClass("openMenu");
            } else {
                $("body").removeClass("openMenu");
            }
        });
    });
    $(".listItems li").click(function () {
        if ($(this).hasClass("active")) {
            $(".listItems li").removeClass("active")
        } else {
            $(".listItems li").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(".language_toggle").click(function (e) {
        e.stopPropagation();
        $(".language_switcher ul").slideToggle();
        $('body,.langDrop li a').click(function () {
            $(".language_switcher ul").slideUp();           
        });
    });
    if ($(window).width() >= 1000) {
        $(window).scroll(function () {
            var sticky = $('.navbarLinks');
                scroll = $(window).scrollTop();
            if (scroll >= 113) {
                sticky.addClass('sticky-header');
            } else {
                sticky.removeClass('sticky-header');
            }
        });
    }
    setTimeout(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".scrolltop").fadeIn() : $(".scrolltop")
                .fadeOut()
        }), $(".scrolltop").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })
    }, 500)
});
document.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var toggleClass = document.getElementsByTagName("body")[0];

    if (scrollTop >= 100) {
        toggleClass.classList.add('sticky');
    } else {
        toggleClass.classList.remove('sticky');
    }
});