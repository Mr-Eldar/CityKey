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
    let myPlacemark = new ymaps.Placemark(
        myPlacemarkCoords, // Координаты метки
        {
            // balloonContent: 'Это моя кастомная метка на карте.', // Содержимое балуна
        },
        {
            // Настройки иконки
            iconLayout: 'default#image', // Используем кастомную иконку
            iconImageHref: '/answer__error-pages/page-bez__put/src/icons/placeMark.png', // Ссылка на изображение иконки
            iconImageSize: [35, 35], // Размер иконки
            iconImageOffset: [-20, -40], // Смещение иконки относительно координат
        }
    )

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark)
}