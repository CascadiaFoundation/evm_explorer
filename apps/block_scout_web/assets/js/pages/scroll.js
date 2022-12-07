import $ from 'jquery'

$(function () {
  const $collapseButton = $('[button-scroll]')
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $collapseButton.fadeIn(10)
    } else {
      $collapseButton.fadeOut(10)
    }
  })
  $collapseButton.on('click', event => {
    $('html, body').animate({
      scrollTop: 0
    }, 100)
    return false
  })
})
