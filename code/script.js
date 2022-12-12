// Slider

const slider = document.querySelector('.slider')
const sliderImages = slider.querySelectorAll('.slider__img')

// Boutons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

const size = sliderImages[0].clientWidth

let counter = 1

slider.style.transform = 'translateX(' + -size * counter + 'px)'

nextBtn.addEventListener('click', () => {
  if (sliderImages.length - 1 <= counter) return
  slider.style.transition = 'transform .4s ease-in-out'
  counter++
  slider.style.transform = 'translateX(' + -size * counter + 'px)'
})

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return
  slider.style.transition = 'transform .4s ease-in-out'
  counter--
  slider.style.transform = 'translateX(' + -size * counter + 'px)'
})

slider.addEventListener('transitionend', () => {
  if (sliderImages[counter].id === 'lastClone') {
    slider.style.transition = 'none'
    counter = sliderImages.length - 2
    slider.style.transform = 'translateX(' + -size * counter + 'px)'
  } else if (sliderImages[counter].id === 'firstClone') {
    slider.style.transition = 'none'
    counter = 1
    slider.style.transform = 'translateX(' + -size * counter + 'px)'
  }
})
