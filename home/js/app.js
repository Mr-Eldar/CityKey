const reviewsContainer = document.querySelector('.reviews-container')
const btnOnUp = document.querySelector('.buttonOnUp')
let slides = document.querySelectorAll('.slide')
let currentIndex = 0
let slideInterval

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.remove('active', 'prev')
		if (i === index) {
			slide.classList.add('active')
		} else if (i === (index - 1 + slides.length) % slides.length) {
			slide.classList.add('prev')
		}
	})
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length
	showSlide(currentIndex)
	resetTimer()
}

function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length
	showSlide(currentIndex)
	resetTimer()
}

function startAutoSlide() {
	slideInterval = setInterval(nextSlide, 4000) // Пролистывание каждые 4 секунды
}

function resetTimer() {
	clearInterval(slideInterval)
	startAutoSlide()
}

showSlide(currentIndex)
startAutoSlide()


reviewsContainer.addEventListener('mouseenter', () => {
	reviewsContainer.classList.add('paused') // Останавливаем анимацию
})

reviewsContainer.addEventListener('mouseleave', () => {
	reviewsContainer.classList.remove('paused') // Возобновляем анимацию
})

btnOnUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

function scrollToTop() {
	if (window.scrollY > 1000) {
		btnOnUp.classList.add('active')
	} else {
		btnOnUp.classList.remove('active')
	}
}

window.addEventListener('scroll', scrollToTop)