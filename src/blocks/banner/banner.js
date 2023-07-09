import Swiper from 'swiper/bundle'

export default function banner() {
  const bannerSlider = new Swiper('.banner__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.banner .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })
}
