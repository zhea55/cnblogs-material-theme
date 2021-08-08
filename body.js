(function ($) {
  'use strict';

  function cleanTextNode(parentSelector, selector, linkSelector) {
    var clean = function () {
      var links = $(linkSelector).clone();
      $(selector).empty().append(links);
    };

    clean();
    $(parentSelector).one('DOMNodeInserted', selector, function (e) {
      clean();
    });
  }

  cleanTextNode('#comment_form', '#ad_t2', '#ad_t2>a');
  cleanTextNode('#comment_form', '#under_post_card1', '#under_post_card1 a');
  cleanTextNode('#comment_form', '#under_post_card2', '#under_post_card2 a');

  // Include CSS file
  function addCSS(filename) {
    var head = document.getElementsByTagName('head')[0];

    var style = document.createElement('link');
    style.href = filename;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
  }

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    $("link[href*='prism-gruvbox-dark']").remove();

    addCSS('https://www.cnblogs.com/css/prismjs/prism.css');
  }

})(window.jQuery);
