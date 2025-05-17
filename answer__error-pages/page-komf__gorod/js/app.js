const btnSubmit = document.getElementById('btnSubmit')
const submitProblemAlert = document.querySelector('.submitProblemAlert')

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
