/**
 * @file
 */
jQuery(document).ready(function($) {

  $(window).load(function() {

    var settings = drupalSettings.slideshow_settings;
    if (!drupalSettings.path.isFront) {
      return; }

    $("#slideshow img").show();
    $("#slideshow").fadeIn("slow");
    $("#slider-controls-wrapper").fadeIn("slow");

    $("#slideshow").cycle({
      fx:    settings.slideshow_effect,
      speed:  "slow",
      timeout: settings.slideshow_effect_time * 1000,
      random: settings.slideshow_randomize,
      nowrap: settings.slideshow_wrap,
      pause: settings.slideshow_pause,
      pager:  "#slider-navigation",
      pagerAnchorBuilder: function(idx, slide) {
        return "#slider-navigation li:eq(" + (idx) + ") a";
      },
      slideResize: true,
      containerResize: false,
      height: "auto",
      fit: 1,
      before: function(){
        $(this).parent().find(".slider-item.current").removeClass("current");
      },
      after: onAfter
    });
  });

  function onAfter(curr, next, opts, fwd) {
    var $ht = $(this).height();
    $(this).parent().height($ht);
    $(this).addClass("current");
  }

  $(window).load(function() {
    var $ht = $(".slider-item.current").height();
    $("#slideshow").height($ht);
  });

  $(window).resize(function() {
    var $ht = $(".slider-item.current").height();
    $("#slideshow").height($ht);
  });

    });
