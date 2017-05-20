/*!
 *  Grove 3.3.6-v1
 *
 *  Copyright 2015 HackerThemes
 *  http://hackerthemes.com
 *
 */

$('document').ready(function(){
    $('.faq .question .collapse').on('show.bs.collapse', function (n) {
      $(n.target).siblings('.faq-toggle').toggleClass('open');
    });

    $('.faq .question .collapse').on('hide.bs.collapse', function (n) {
        $(n.target).siblings('.faq-toggle').toggleClass('open');        
    });
});