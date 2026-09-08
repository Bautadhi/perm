(function() {
    'use strict';
    var URL_HP = 'https://polytasik-pixel.github.io/permintaanToko/';
    var URL_PC = 'https://polytasik-pixel.github.io/permintaanTokoo/';
    
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua) ||
                   (window.innerWidth <= 768) ||
                   (/Macintosh/i.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1);

    window.location.replace(isMobile ? URL_HP : URL_PC);
})();
