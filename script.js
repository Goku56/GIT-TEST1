$(document).ready(function() {
    $('#carousel').carousel({ interval:  2000 });
    $('#carouselButton').click(function(){
        if  ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#carousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if  ($('#carouselButton').children('span').hasClass('fa-play')) {
                 $('#carousel').carousel('cycle');
                 $('#carouselButton').children('span').removeClass('fa-play');
                 $('#carouselButton').children('span').addClass('fa-pause');
        }
        });
});

$(document).ready(function() {
    $('#loginModal').modal({'toggle'});
});
$(document).ready(function() {
    $('#BookingModal').modal({'toggle'});
});
            