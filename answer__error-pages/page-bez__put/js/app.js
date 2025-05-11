const itemImages = document.querySelectorAll('.item__image')

itemImages.forEach(image => {
	image.addEventListener('click', () => {
		const itemBlock = image.nextElementSibling // Находим .item__block рядом с картинкой
		itemBlock.classList.toggle('active')
	})
})
