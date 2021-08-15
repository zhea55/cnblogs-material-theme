(function ($) {
  'use strict';

  var needDeleteSelectors = ['blockquote', 'cnblogs_post_body'];

  function removeDefaultMarkdownStyle() {
    var styleTag = $("link[href*='blog-common']")[0];
    var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;

    if (sheet.cssRules) {
      // all browsers, except IE before version 9
      for (var i = 0; i < sheet.cssRules.length; i++) {
        var selectorText = sheet.cssRules[i].selectorText;

        for (var j = 0; j < needDeleteSelectors.length; j++) {
          var selector = needDeleteSelectors[j];
          var re_selector = new RegExp(selector);
          if (re_selector.test(selectorText)) {
            sheet.deleteRule(i);
          }
        }
      }
    } else {
      // Internet Explorer before version 9
      for (var i = 0; i < sheet.rules.length; i++) {
        var selectorText = sheet.rules[i].selectorText;
        for (var j = 0; j < needDeleteSelectors.length; j++) {
          var selector = needDeleteSelectors[j];
          var re_selector = new RegExp(selector);
          if (re_selector.test(selectorText)) {
            sheet.removeRule(i);
          }
        }
      }
    }
  }

  removeDefaultMarkdownStyle();
  removeDefaultMarkdownStyle();
})(window.jQuery);
