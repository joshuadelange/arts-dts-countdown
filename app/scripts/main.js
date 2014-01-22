'use strict' ;

console.log('\'Allo \'Allo!');

$(document).ready(function(){

  var now = new Date(),
      fiveminsfromnow = new Date(now).setMinutes(now.getMinutes() + 5) ;


  var timer = setInterval(function(){
    
    var mins = countdown(fiveminsfromnow).minutes,
        secs = countdown(fiveminsfromnow).seconds ;

    $('.countdown h1').html(mins + ':' + secs) ;

    if(mins === 0 && secs === 0) {
      clearInterval(timer) ;
    }

  }, 1000) ;

}) ;