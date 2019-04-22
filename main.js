//navbar js

$(document).ready(function(){

  function setREVStartSize(e) {
    try {
      e.c = jQuery(e.c);
      var i = jQuery(window).width(),
        t = 9999,
        r = 0,
        n = 0,
        l = 0,
        f = 0,
        s = 0,
        h = 0;
      if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
          f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
        }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] ||
        e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" ==
        e.sliderLayout) {
        var u = (e.c.width(), jQuery(window).height());
        if (void 0 != e.fullScreenOffsetContainer) {
          var c = e.fullScreenOffsetContainer.split(",");
          if (c) jQuery.each(c, function (e, i) {
              u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
            }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e
            .fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e
              .fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset
            .length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
        }
        f = u
      } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
      e.c.closest(".rev_slider_wrapper").css({
        height: f
      })
    } catch (d) {
      console.log("Failure at Presize of Slider:" + d)
    }
  };





            $(".button a").click(function(){
                $(".overlay").fadeIn(1000);
            });
            $("#close").click(function(){
                  $(".overlay").fadeOut(500);
            })
          ///text auto complete
          //made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// team header





//Html script after navbar


if (setREVStartSize !== undefined) setREVStartSize({
  c: '#rev_slider_256_1',
  responsiveLevels: [1240, 1240, 1240, 480],
  gridwidth: [1200, 1200, 1200, 480],
  gridheight: [800, 800, 800, 700],
  sliderLayout: 'fullscreen',
  fullScreenAutoWidth: 'off',
  fullScreenAlignForce: 'off',
  fullScreenOffsetContainer: '',
  fullScreenOffset: '60px'
});

var revapi256,
  tpj;
(function () {
  if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener(
    "DOMContentLoaded", onLoad);
  else onLoad();

  function onLoad() {
    if (tpj === undefined) {
      tpj = jQuery;
      if ("off" == "on") tpj.noConflict();
    }
    if (tpj("#rev_slider_256_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_256_1");
    } else {
      revapi256 = tpj("#rev_slider_256_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//revolution.themepunch.com/wp-content/plugins/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        particles: {
          startSlide: "2",
          endSlide: "2",
          zIndex: "1",
          particles: {
            number: {
              value: 80
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ffffff",
                opacity: 1
              },
              image: {
                src: ""
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              min: 0.25,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              min: 0.5,
              anim: {
                enable: false,
                speed: 40,
                size_min: 1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              min_speed: 1,
              straight: false,
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "repulse"
              }
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                opacity: 0.4
              },
              repulse: {
                distance: 200
              }
            }
          }
        },
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          arrows: {
            style: "gyges",
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '',
            left: {
              h_align: "center",
              v_align: "bottom",
              h_offset: -20,
              v_offset: 0
            },
            right: {
              h_align: "center",
              v_align: "bottom",
              h_offset: 20,
              v_offset: 0
            }
          }
        },
        responsiveLevels: [1240, 1240, 1240, 480],
        visibilityLevels: [1240, 1240, 1240, 480],
        gridwidth: [1200, 1200, 1200, 480],
        gridheight: [800, 800, 800, 700],
        lazyType: "none",
        parallax: {
          type: "mouse+scroll",
          origo: "slidercenter",
          speed: 400,
          speedbg: 0,
          speedls: 0,
          levels: [1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 47, 48, 49, 50, 51, 55],
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "60px",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || ('CSS' in window &&
          'supports' in window.CSS && !window.CSS.supports('mix-blend-mode', 'screen'))) {

        var bgColor = 'rgba(245, 245, 245, 0.5)';
        //jQuery('.rev_slider .tp-caption[data-blendmode]').removeAttr('data-blendmode').css('background', bgColor);
        jQuery('.rev_slider .tp-caption.tp-blendvideo[data-blendmode]').remove();
      }
    }; /* END OF revapi call */

    RevSliderBeforeAfter(tpj, revapi256, {
      arrowStyles: {
        leftIcon: "fa-icon-caret-left",
        rightIcon: "fa-icon-caret-right",
        topIcon: "fa-icon-caret-up",
        bottomIcon: "fa-icon-caret-down",
        size: "35",
        color: "#ffffff",
        bgColor: "transparent",
        spacing: "10",
        padding: "0",
        borderRadius: "0"
      },
      dividerStyles: {
        width: "1",
        color: "rgba(255, 255, 255, 0.5)"
      },
      onClick: {
        time: "500",
        easing: "Power2.easeOut",
      },
      cursor: "move",
      carousel: false
    });

    if (typeof ExplodingLayersAddOn !== "undefined") ExplodingLayersAddOn(tpj, revapi256);




    try {
      initSocialSharing("256");
    } catch (err) {}
  }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */


//Nice Text script
var htmlDivCss = unescape(
  ".tp-whiteshadow%20%7B%20%0A%20%20text-shadow%3A%20-2px%201px%20white%2C%20%0A%20%20%20%20%20%20%20%20%20%20-3px%202px%20white%2C%20%0A%20%20%20%20%20%20%20%20%20%20-4px%203px%20white%2C%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20-5px%204px%20white%2C%20%0A%20%20%20%20%20%20%20%20%20%20-6px%205px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-7px%206px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-8px%207px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-9px%208px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-10px%209px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-11px%2010px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-12px%2011px%20white%3B%0A%7D%0A.tp-blackshadow%20%7B%20%0A%20%20text-shadow%3A%20-2px%201px%20%23222%2C%20%0A%20%20%20%20%20%20%20%20%20%20-3px%202px%20%23222%2C%20%0A%20%20%20%20%20%20%20%20%20%20-4px%203px%20%23222%2C%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20-5px%204px%20%23222%2C%20%0A%20%20%20%20%20%20%20%20%20%20-6px%205px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-7px%206px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-8px%207px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-9px%208px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-10px%209px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-11px%2010px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-12px%2011px%20%23222%3B%0A%7D"
);
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement('div');
  htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
  document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}
        });  




        var htmlDivCss = unescape(
          ".tp-whiteshadow%20%7B%20%0A%20%20text-shadow%3A%20-2px%201px%20white%2C%20%0A%20%20%20%20%20%20%20%20%20%20-3px%202px%20white%2C%20%0A%20%20%20%20%20%20%20%20%20%20-4px%203px%20white%2C%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20-5px%204px%20white%2C%20%0A%20%20%20%20%20%20%20%20%20%20-6px%205px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-7px%206px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-8px%207px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-9px%208px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-10px%209px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-11px%2010px%20white%2C%0A%20%20%20%20%20%20%20%20%20%20-12px%2011px%20white%3B%0A%7D%0A.tp-blackshadow%20%7B%20%0A%20%20text-shadow%3A%20-2px%201px%20%23222%2C%20%0A%20%20%20%20%20%20%20%20%20%20-3px%202px%20%23222%2C%20%0A%20%20%20%20%20%20%20%20%20%20-4px%203px%20%23222%2C%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20-5px%204px%20%23222%2C%20%0A%20%20%20%20%20%20%20%20%20%20-6px%205px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-7px%206px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-8px%207px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-9px%208px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-10px%209px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-11px%2010px%20%23222%2C%0A%20%20%20%20%20%20%20%20%20%20-12px%2011px%20%23222%3B%0A%7D"
        );
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if (htmlDiv) {
          htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        } else {
          var htmlDiv = document.createElement('div');
          htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
          document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }
