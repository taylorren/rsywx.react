/*!
 *  Grove 3.3.6-v1
 *
 *  Copyright 2015 HackerThemes
 *  http://hackerthemes.com
 *
 */

$('document').ready(function(){
  //Calling the layer slider
  $("#layerslider").layerSlider({
      autoStart               : true,
      responsive              : true,
      responsiveUnder         : 1170,
      layersContainer         : 1170,
      firstSlide              : 1,
      twoWaySlideshow         : true,
      randomSlideshow         : false,
      keybNav                 : true,
      touchNav                : true,
      imgPreload              : true,
      navPrevNext             : true,
      navStartStop            : false,
      navButtons              : false,
      thumbnailNavigation     : 'disable',
      tnWidth                 : 100,
      tnHeight                : 60,
      tnContainerWidth        : '60%',
      tnActiveOpacity         : 35,
      tnInactiveOpacity       : 100,
      hoverPrevNext           : true,
      hoverBottomNav          : false,
      skin                    : 'grove',
      skinsPath               : 'modules/layerslider/skins/',
      pauseOnHover            : true,
      globalBGColor           : 'transparent',
      globalBGImage           : false,
      //animateFirstSlide       : false,
      yourLogo                : false,
      yourLogoStyle           : 'position: absolute; z-index: 1001; left: 10px; top: 10px;',
      yourLogoLink            : false,
      yourLogoTarget          : '_blank',
      loops                   : 0,
      forceLoopNum            : true,
      autoPlayVideos          : true,
      autoPauseSlideshow      : 'auto',
      youtubePreview          : 'maxresdefault.jpg',
      showBarTimer        : false,
      showCircleTimer     : false,
   
      // you can change this settings separately by layers or sublayers with using html style attribute
   
      slideDirection          : 'right',
      slideDelay              : 4000,
      durationIn              : 1000,
      durationOut             : 1000,
      easingIn                : 'easeInOutQuint',
      easingOut               : 'easeInOutQuint',
      delayIn                 : 1,
      delayOut                : 1
  });

});

