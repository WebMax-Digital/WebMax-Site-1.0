
(function($) {
var didScroll, lastScrollTop = 0,
    scrollAmount = 10,
    navbarHeight = $(".slideUp").outerHeight();
$(window).scroll(function(a) {
    didScroll = !0
});
setInterval(function() {
    didScroll && (hasScrolled(), didScroll = !1)
}, 50);

function hasScrolled() {
    var a = $(this).scrollTop();
    Math.abs(lastScrollTop - a) <= scrollAmount || (a > lastScrollTop && a > navbarHeight ? $(".slideUp").css({
        top: -$(this).outerHeight()
    }) : a + $(window).height() < $(document).height() && $(".slideUp").css({
        top: 0
    }), lastScrollTop = a)
    if (a > 300) {
                
                $('.slideUp').addClass('darkblue');
                $('.button_container span').css("background-color","#fff");
 
              $('.w-logo').show();
            //  $('.color').show();
             
              
            }
            else {
            	
             $('.slideUp').removeClass('darkblue');
              $('.button_container span').css("background-color"," #fff");
             // $('.color').hide();
              $('.w-logo').show();
        
            }

}})(jQuery);