
$(function() {
    $('.c-hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.p-gnav').addClass('active');
        } else {
            $('.p-gnav').removeClass('active');
        }
    });
});