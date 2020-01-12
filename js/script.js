//Capturar el porcentaje de Scroll de la pagina

$(window).scroll(function(){
    
    var wintop = $(window).scrollTop(), 
        docheight = $(document).height(),
        winheight = $(window).height();
    
    var scroll = (wintop / (docheight - winheight )) * 100;
    
    $('.scroll-line').css('width', (scroll + '%'));
    
    
});