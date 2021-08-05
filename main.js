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
})(window.jQuery);
