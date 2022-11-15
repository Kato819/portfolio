$(function() {

    $('.works-list-item:nth-last-child(-n+4)').hide();

    $('.view-more-btn').click(function(){

        $('.works-list-item:nth-last-child(-n+4)').slideDown();
    });

})
