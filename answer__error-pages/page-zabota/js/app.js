const itemImages = document.querySelectorAll('.item__image')
const btnSubmit = document.getElementById('btnSubmit')
const submitProblemAlert = document.querySelector('.submitProblemAlert')

itemImages.forEach(image => {
	image.addEventListener('click', () => {
		const itemBlock = image.nextElementSibling // Находим .item__block рядом с картинкой
		itemBlock.classList.toggle('active')
	})
})

btnSubmit.addEventListener('click', () => {
	let userPrompts = document.querySelectorAll('input[type="text"]')

	userPrompts.forEach(prompt => {
		prompt.value = ''
	})

	submitProblemAlert.classList.add('active')
	setTimeout(() => {
		submitProblemAlert.classList.remove('active')
	}, 3000)
})
