window.onload = function () {

	let canv = $('#myCanvas');

	// Прямоугольник
	canv.drawRect({
		strokeStyle: 'red',//Стиль обводки
		fillStyle: 'steelblue', //Стиль заливки
		strokeWidth: 4,//ирина обводки
		fromCenter: false, //Мы НЕ отсчитываем от центра и начинаем отсчитывать от верхнего левого угла
		x: 10, y: 10,
		width: 200, 
		height: 200
	});
	//Дуги и окружности
	canv.drawArc({
		strokeStyle: 'yellow',//Стиль обводки
		fillStyle: 'pink', //Стиль заливки
		strokeWidth: 4,//ирина обводки
		x: 350, y: 110,
		radius: 100,
		start: 90, end: 270,
		closed: true
	});

	// Линии
	canv.drawLine({
		strokeStyle: 'orange',
		strokeWidth: 10,
		rounded: true,
		x1: 10, y1: 230,
		x2: 400, y2: 300,
		x3: 250, y3: 600,
		closed: true //Замкнуть
	});
}