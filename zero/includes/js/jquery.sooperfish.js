

if (isIE == 'undefined') var isIE = false;
if (isIE6 == 'undefined') var isIE6 = false;


/* easing */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) { //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});

/*
 * SooperFish 0.1
 * (c) 2010 Jurriaan Roelofs - SooperThemes.com
 * Inspired by Suckerfish, Superfish and Droppy
 * Licensed GPL: http://www.gnu.org/licenses/gpl.html
 */
(function($){
$.fn.sooperfish = function(op) {

  var sf = $.fn.sooperfish;
  sf.o = [];
  sf.op = {};
  sf.c = {
    menuClass   : 'sf-js-enabled',
    isParent : 'sf-parent',
    arrowClass  : 'sf-arrow'
  };
  if ($.easing.easeOutOvershoot) { //set default easing
    sooperEasingShow = 'easeOutOvershoot';
  } else {
    sooperEasingShow = 'linear';
  };
  if ($.easing.easeInTurbo) {
    sooperEasingHide = 'easeInTurbo';
  } else {
    sooperEasingHide = 'linear';
  };  
  sf.defaults = {
    multiColumn  : true,
    dualColumn  : 6, //if a submenu has at least this many items it will be divided in 2 columns
    tripleColumn  : 12, //if a submenu has at least this many items it will be divided in 3 columns
    hoverClass  : 'sfHover',
    delay    : 500, //make sure menus only disappear when intended, 500ms is advised by Jacob Nielsen
    animationShow  : {height:'show'},
    speedShow    : 600,
    easingShow      : sooperEasingShow,
    animationHide  : {height:'hide',opacity:'hide'},
    speedHide    : 200,
    easingHide      : sooperEasingHide,
    autoArrows  : true, //Adds span elements to parent li elements, projecting arrow images on these items to indicate submenus. I added an alternative image file with white arrows.
    onShow    : function(){}, //callback after showing menu
    onHide    : function(){} //callback after hiding menu
  };
  

  //Merge default settings with o function parameter
  var o = $.extend({},sf.defaults,op);
  if (!o.sooperfishWidth) {
  o.sooperfishWidth = $('ul:first li:first', this).width(); //if no width is set in options try to read it from DOM
  } else {
  $('ul li', this).width(o.sooperfishWidth) //if width is set in invocation make sure this width is true for all submenus
  }

  this.each(function() {
    
    //Check dom for submenus
    var parentLi = $('li:has(ul)', this);
    parentLi.each(function(){
      if (o.autoArrows) { //Add autoArrows if requested
      $('>a',this).append('<span class="'+sf.c.arrowClass+'">&raquo;</span>');
      }
      $(this).addClass(sf.c.isParent);
    });
    
    $('ul',this).css({left: 'auto',display: 'none'}); //The script needs to use display:none to make the hiding animation possible

    //Divide menu in columns
    //Set width override
    if (o.multiColumn) {
    var uls = $('ul',this);
    uls.each(function(){
      var ulsize = $('>li:not(.backLava)',this).length; //Skip list items added by Lavalamp plugin
      if (ulsize >= o.dualColumn) {
        if (ulsize >= o.tripleColumn) {
          $(this).width(3*o.sooperfishWidth).addClass('multicolumn triplecolumn');
        } else {
          $(this).width(2*o.sooperfishWidth).addClass('multicolumn dualcolumn');
        }
      }
    });
    }

    var root = this, zIndex = 1000;

    function getSubmenu(ele) {
      if (ele.nodeName.toLowerCase() == 'li') {
        var submenu = $('> ul', ele);
        return submenu.length ? submenu[0] : null;
      } else {
        return ele;
      }
    }

    function getActuator(ele) {
      if (ele.nodeName.toLowerCase() == 'ul') {
        return $(ele).parents('li')[0];
      } else {
        return ele;
      }
    }

    function hideSooperfishUl() {
      var submenu = getSubmenu(this);
      if (!submenu) return;
      $.data(submenu, 'cancelHide', false);
      setTimeout(function() {
        if (!$.data(submenu, 'cancelHide')) {
          $(submenu).animate(o.animationHide,o.speedHide,o.easingHide,function(){ o.onHide.call(submenu); });
        }
      }, o.delay);
    }

    function showSooperfishUl() {
      var submenu = getSubmenu(this);
      if (!submenu) return;
      $.data(submenu, 'cancelHide', true);
      $(submenu).css({zIndex: zIndex++}).animate(o.animationShow,o.speedShow,o.easingShow,function(){ o.onShow.call(submenu); });
      if (this.nodeName.toLowerCase() == 'ul') {
        var li = getActuator(this);
        $(li).addClass('hover');
        $('> a', li).addClass('hover');
      }
    }
    
    // Bind Events. Yes it's that simple!
    $('li', this).unbind().hover(showSooperfishUl, hideSooperfishUl);

  });

};
})(jQuery);