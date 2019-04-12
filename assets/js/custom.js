// rjq('#rjp-radiojar-player').radiojar('player', {
//     "streamName": "6ckb1k391neuv",
//     "autoplay":true
// });


$('#help-menu').click(function(){
    $('.help-overlay ').toggleClass('show-help');
    $('.about-overlay ').removeClass('show-about');
    $('.gotplus-overlay').removeClass('show-plus');
});

$('#help-about').click(function(){
    $('.help-overlay ').removeClass('show-help');
    $('.about-overlay ').toggleClass('show-about');
    $('.gotplus-overlay').removeClass('show-plus');

});

$('#got-plus').click(function(){
    $('.help-overlay').removeClass('show-help');
    $('.gotplus-overlay').toggleClass('show-plus');
    $('.about-overlay ').removeClass('show-about');    
});


$('#close-help').click(function(){
    $('.help-overlay ').toggleClass('show-help');
});

$('#close-about').click(function(){
    $('.about-overlay ').toggleClass('show-about');
});

$('#close-plus').click(function(){
    $('.gotplus-overlay').toggleClass('show-plus');    
});
