function setContentHeight(element, height){
    $(element).height(height);
}
function setLineHeight(element, height){
    $(element).css('lineHeight', height);
}

$(document).ready(function() {
    setContentHeight(document.querySelector('#content-1'), document.documentElement.clientHeight);
    setLineHeight(document.querySelector('#content-1 .vertical-middle-out'), document.documentElement.clientHeight - 200 + 'px');
});
$(window).on("orientationchange, resize", function() {
    setContentHeight(document.querySelector('#content-1'), document.documentElement.clientHeight);
    setLineHeight(document.querySelector('#content-1 .vertical-middle-out'), document.documentElement.clientHeight - 200 + 'px');
    buildTeamItem();
});

// ourWorks
$(document).ready(function () {
    var shoeBy = 3;
    var showed = 6;
    var allItems = $("#workList .item").size();
    if (allItems <= showed) $('#loadMore').hide();
    $('#workList .item:lt('+showed+')').show();
    $('#loadMore').click(function () {
        if(showed+shoeBy < allItems){
            showed = showed + shoeBy;
        }else{
            showed = allItems;
            $('#loadMore').hide();
        }
        $('#workList .item:lt('+showed+')').show();
    });
});

$( ".our-works-block .item").hover(
    function() {
        var element = $(this).find('.cont')
        element.css('margin-top', -element.height()/2 + 'px');
    }
);
// ourWorks END


// testimonials
$(document).ready(function(){
    var owlTestimonials = $('.owl-testimonials .owl-carousel');
    owlTestimonials.owlCarousel({
        'items': 1,
        'loop': true
    });

    $('.owl-testimonials .arrow.prev').click(function() {
        owlTestimonials.trigger('prev.owl.carousel');
    })
    $('.owl-testimonials .arrow.next').click(function() {
        owlTestimonials.trigger('next.owl.carousel');
    })
});
// testimonials END

// our team
$(document).ready(function(){
    var owlOurTeam = $('.owl-our-team .owl-carousel');
    owlOurTeam.on('initialized.owl.carousel', function() {
        buildTeamItem();
    });

    $('.owl-our-team').waitForImages(function() {
        owlOurTeam.owlCarousel({
            'margin': 30,
            'dots': true,
            'responsive' : {
                0 : {
                    'items': 1
                },
                480 : {
                    'items': 2
                },
                768 : {
                    'items': 3
                },
                992 : {
                    'items': 4
                }
            }
        });
    });



});

function buildTeamItem(){
    var items = $('.owl-our-team .owl-carousel .item .img-box');
    items.removeClass('fixed').removeAttr("style");
    items.each(function(){
        $(this).height(this.offsetHeight).addClass('fixed');
    });
}
// our team END

// scroll to element
$(document).ready(function(){
    $('[data-scroll-to]').each(function(){
        $(this).on('click', function(){
            var id = $(this).data('scroll-to');
            if($(id)){
                $('html, body').animate({
                    scrollTop: ($(id).offset().top)
                },500);
            }
        });

    });
});
// scroll to element end

// menu
$('[data-show-main-menu]').click(function () {
    $('#main-menu').fadeIn();
});
$('[data-hide-main-menu]').click(function () {
    $('#main-menu').fadeOut();
});
// menu END