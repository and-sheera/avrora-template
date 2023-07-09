import Swiper from 'swiper/bundle'
import { Fancybox } from '@fancyapps/ui'

export default function gallery() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    hideScrollbar: false,
    Html: {
      videoAutoplay: false
    },
    Toolbar: {
      display: {
        right: ['close']
      }
    }
  })

  const gallerySlider = new Swiper('.gallery--m-slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    enabled: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.gallery .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      744: {
        slidesPerView: 'auto',
        enabled: false
      }
    }
  })
}
