window.onload = function () {

	let canv = $('#myCanvas');

	canv.drawRect({
		fillStyle: '#87CEFA', //Стиль заливки
		//strokeWidth: 4,//ирина обводки
		fromCenter: false, //Мы НЕ отсчитываем от центра и начинаем отсчитывать от верхнего левого угла
		//x: 10, y: 10,
		width: 500, 
		height: 300
	});
	//Дуги и окружности
	//canv.drawCircle({
		//strokeStyle: 'yellow',//Стиль обводки
		//fillStyle: 'pink', //Стиль заливки
		//strokeWidth: 4,//ирина обводки
		//x: 350, y: 110,
		//radius: 100,
		//start: 90, end: 270,
		//closed: true
	//});

	//Линии
	canv.drawLine({
		strokeStyle: 'green',
		fillStyle: 'green',
		strokeWidth: 10,
		rounded: true,
		x1: 100, y1: 10,
		x2: 200, y2: 80,
		x3: 10, y3: 80,
		closed: true //Замкнуть
	});
	canv.drawLine({
		strokeStyle: 'green',
		fillStyle: 'green',
		strokeWidth: 10,
		rounded: true,
		x1: 100, y1: 50,
		x2: 200, y2: 150,
		x3: 10, y3: 150,
		closed: true //Замкнуть
	});
	canv.drawLine({
		strokeStyle: 'green',
		fillStyle: 'green',
		strokeWidth: 10,
		rounded: true,
		x1: 100, y1: 110,       //100 110
		x2: 200, y2: 220,		//200 200
		x3: 0, y3: 215,			//0 160
		closed: true //Замкнуть
	});
	canv.drawLine({
		strokeStyle: 'green',
		fillStyle: 'green',
		strokeWidth: 10,
		rounded: true,
		x1: 100, y1: 160,      
		x2: 200, y2: 280,	
		x3: 0, y3: 278,	//275
		closed: true //Замкнуть
	});
	canv.drawRect({
		strokeStyle: 'brown',//Стиль обводки
		fillStyle: 'brown', //Стиль заливки
		strokeWidth: 4,//ирина обводки
		fromCenter: false, //Мы НЕ отсчитываем от центра и начинаем отсчитывать от верхнего левого угла
		x: 70, y: 285,
		width: 50, 
		height: 20
	});
	//canv.drawArc({
		//strokeStyle: 'yellow',//Стиль обводки
		//fillStyle: 'yellow', //Стиль заливки
		//strokeWidth: 4,//ширина обводки
		//x: 400, y: 50,
		//radius: 40,
		//start: 90, end: 270,
		//closed: true
	//});
	canv.drawArc({
		strokeStyle: 'yellow',//Стиль обводки
		fillStyle: 'yellow', //Стиль заливки
		strokeWidth: 4,//ширина обводки
		x: 400, y: 50,
		radius: 40,
		start: -50, end: 370,
		closed: true
	});
	//canv.drawLine({
		//strokeStyle: 'yellow',
		//fillStyle: 'yellow',
		//height: 20,
		//strokeWidth: 10,
		//rounded: true,
		//x1: 400, y1: 95,
		//x2: 400, y2: 200
	//});
	//canv.drawLine({
		//strokeStyle: 'yellow',
		//fillStyle: 'yellow',
		//height: 10,
		//strokeWidth: 10,
		//rounded: true,
		//x1: 150, y1: 85,
		//x2: 250, y2: 100,

	//});
}//