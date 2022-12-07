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

  const acc = document.getElementsByClassName('accordion')

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active')
      const panel = this.nextElementSibling
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    })
  }
})
