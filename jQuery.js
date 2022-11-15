$(function() {
    $('.works-list-item:nth-last-child(-n+4)').hide();
    $('.view-more-btn').click(function(){
        $('.works-list-item:nth-last-child(-n+4)').slideDown();
        $('.btn').text('close');
        a = a+1;
    });
})
