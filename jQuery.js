$(function() {

    var btn = 'close';

    $('.works-list-item:nth-last-child(-n+4)').hide();

    for(a=1;a=1;a = a-1){
        $('.view-more-btn').click(function(){

            if(btn = 'close'){
                $('.works-list-item:nth-last-child(-n+4)').slideDown();
                $('.btn').text('close');
                a = a+1;
            }else{
                $('.works-list-item:nth-last-child(-n+4)').slideUp();
                $('.btn').text('view more');
                a = a+1;
            }

        });
    }


})
