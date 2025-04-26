// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map('map', {
        center: [43.31965269454349, 45.6924251417931],
        zoom: 13,
    })

    let myPlacemarkCoords = [43.31965269454349, 45.6924251417931]

    // Создание метки с кастомной иконкой
    const myPlacemark = new ymaps.Placemark(
			myPlacemarkCoords, // координаты
			{
				hintContent: 'Перетащи меня',
			},
			{
				iconLayout: 'default#image',
				iconImageHref:
					'/answer__error-pages/page-bez__put/src/icons/placeMark.png',
				iconImageSize: [35, 35],
				iconImageOffset: [-20, -40],
				draggable: true,
			}
		)


    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark)

    const adressInput = document.getElementById('adress')
    const btnFindAdress = document.getElementById('btnFindAdress')

    const getAdress = (coords) => {
        ymaps.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0)
            const address = firstGeoObject.getAddressLine()
            adressInput.value = address
        })
    }

    const setCoordsByAdress = (address) => {
        ymaps.geocode(address).then((res) => {
            const firstGeoObject = res.geoObjects.get(0)
            const coords = firstGeoObject.geometry.getCoordinates()
            myPlacemark.geometry.setCoordinates(coords)
            myMap.setCenter(coords)
        })
    }

    myPlacemark.events.add('dragend', () => {
        const coords = myPlacemark.geometry.getCoordinates()
        getAdress(coords)
    })

    btnFindAdress.addEventListener('click', () => {
        const address = adressInput.value
        if (address.trim() !== '') {
            setCoordsByAdress(address)
        }
    })

    getAdress(myPlacemarkCoords)
}