// slick
$(function(){    
    $('.my-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        Infinity: true,
        arrows: false
      });
});

// Adobe font
(function(d) {
  var config = {
    kitId: 'fwg2dsq',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// lightbox
lightbox.option({
  'alwaysShowNavOnTouchDevices': false,
  'albumLabel': "%1 枚目（全 %2 枚中）",
  'disableScrolling': true,
  'fadeDuration': 600,
  'fitImagesInViewport': true,
  'imageFadeDuration': 600,
  'positionFromTop': 50,
  'resizeDuration': 700,
  'showImageNumberLabel': true,
  'wrapAround': true
})
// fade-in
$(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});