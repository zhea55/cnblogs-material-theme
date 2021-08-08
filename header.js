(function ($) {
  'use strict';

  function removeDefaultMarkdownStyle() {
    var styleTag = $("link[href*='blog-common']")[0];
    var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;

    if (sheet.cssRules) {
      // all browsers, except IE before version 9
      for (var i = 0; i < sheet.cssRules.length; i++) {
        if (/cnblogs_post_body/.test(sheet.cssRules[i].selectorText)) {
          sheet.deleteRule(i);
        }
      }
    } else {
      // Internet Explorer before version 9
      for (var i = 0; i < sheet.rules.length; i++) {
        if (/cnblogs_post_body/.test(sheet.rules[i].selectorText)) {
          sheet.removeRule(i);
        }
      }
    }
  }

  removeDefaultMarkdownStyle();
  removeDefaultMarkdownStyle();
})(window.jQuery);
