const slides = document.querySelectorAll('.main-article__slide')
const prevBtn = document.querySelector('.prev-button')
const nextBtn = document.querySelector('.next-button')

let slideIndex = 0

function show (index) {
  slides[slideIndex].classList.remove('active')
  slides[index].classList.add('active')
  slideIndex = index
}

prevBtn.addEventListener('click', () => {
  index = slideIndex - 1
  if (index < 0) index = slides.length - 1
  show(index)
})

nextBtn.addEventListener('click', () => {
  index = slideIndex + 1
  if (index >= slides.length) index = 0
  show(index)
})

