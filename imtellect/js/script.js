var paginationArea = "#page-nav";
var page_to_next_link = "#page-next-link";
var container = $('#content'); //container area
var itemSelector = '.masonry .item'

$(document).ready(function() {
    $container.masonry({
        columnWidth: 200,
        itemSelector: itemSelector,
        isFitWidth: true,
        isAnimated: !Modernizr.csstransitions
    }).imagesLoaded(function() {
        $(this).masonry('reload');
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            $('div#loadmoreajaxloader').show();
            $.ajax({
                url: "loadmore.php",
                success: function(html) {
                    if (html) {
                        $("#postswrapper").append(html);
                        $('div#loadmoreajaxloader').hide();
                    } else {
                        $('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
                    }
                }
            });
        }
    });


});