export default function header() {
  headerDimensions()
  window.addEventListener('load', headerDimensions)
  window.addEventListener('resize', headerDimensions)

  burger()
}

function headerDimensions() {
  const headerHeight = document.querySelector('.header').offsetHeight
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)

  document.documentElement.style.setProperty('--header-dropdown-height', '0px')
  let dropdownHeight = 0
  for (const list of document.querySelectorAll('.header__list')) {
    if (dropdownHeight < list.offsetHeight) {
      dropdownHeight = list.offsetHeight
    }
  }
  for (const submenu of document.querySelectorAll('.header__submenu')) {
    if (dropdownHeight < submenu.offsetHeight) {
      dropdownHeight = submenu.offsetHeight
    }
  }
  document.documentElement.style.setProperty('--header-dropdown-height', `${dropdownHeight}px`)
}

function burger() {
  const header = document.querySelector('.header')
  const burgerButton = header.querySelector('.header__burger-button')
  if (burgerButton) {
    burgerButton.addEventListener('click', function () {
      header.classList.toggle('header--burger')
    })
  }

  if (window.innerWidth <= 1360) {
    for (const link of header.querySelectorAll('.header__link')) {
      link.addEventListener('click', function (event) {
        if (!this.closest('.header__list-item') && this.parentElement.children.length > 1) {
          event.preventDefault()
          const item = this.closest('.header__item')
          if (item) item.classList.add('active')
          const subitem = this.closest('.header__subitem')
          if (subitem) subitem.classList.add('active')
        }
      })
    }

    for (const navBack of header.querySelectorAll('.header__nav-back')) {
      navBack.addEventListener('click', function () {
        const active = navBack.closest('.active')
        if (active) active.classList.remove('active')
      })
    }
  }
}
