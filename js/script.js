var $pinwheel = $('.pinwheel'),
    $body = $(document.body),
    bodyHeight = $body.height();

$(window).scroll(function () {
    $pinwheel.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
    });
});