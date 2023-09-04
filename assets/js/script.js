// ハンバーガーメニュ
(function ($) {
  $(function () {
    $('#hamburger').on('click', function () {
      $('body').toggleClass('open');
    });
  });
})(jQuery);

// グローバルナビメニューのリンクをクリックしたらページを閉じる
$(function () {
  $("#gnav ul li a").on("click", function () {
    $("body").removeClass("open");
  });
});
