import $ from 'jquery'
import 'parsleyjs'

export default function form() {
  for (const form of document.querySelectorAll('.form')) {
    $(form).parsley().on('form:success', function () {
      this.element.classList.add('form--thx')
    })
  }
}
