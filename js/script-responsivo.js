const slider2 = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('arrow-left');
const btnNext = document.getElementById('arrow-right');

let currentSlide = 0;

if (window.matchMedia("(max-width: 991px)").matches) {
function hideSlider() {
  slider2.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider2[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider2.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider2.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

}