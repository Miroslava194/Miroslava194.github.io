
function getName() {
	let name = $('#name').val()

	if (name == "" || name == null) {
		name = "Ученик";
	}

	$('body').empty();

	hi(name);
}

function hi(name) {
	$('body').prepend('<h2>' +name+', если ты готов начать тестированние, нажми СТАРТ</h2>');
	$('h2').after('<button onclick="test()">СТАРТ</button>');

}

let questions = ["Какое свойство отвечает за внутренние поля в HTML-элементе?", "Укажите CSS свойство позволяющее устанавливать размер шрифта", 
	" Укажите псевдо-класс позволяющий оформить ссылки, на которые наведен курсор мыши", "С помощью какого свойства таблицы определяются её границы?", "Существует ли у тега input закрывающий тег в синтаксисе HTML?", "Элемент div является строчным или блочным элементом?", "Вам нужен нумерованный список. Какой элемент Вы используете?",
 	"Если потребуется для текста установить шрифт, какое свойство поможет?", "Какое из перечисленных свойств устанавливает прозрачность?", "Это свойство устанавливает способ позиционирования элемента относительно окна браузера или других объектов на веб-странице"];
let answers = ["padding", "font-size", ":hover", "border", "нет", "блочным", "ol", "font-family", "opacity", "position"];
let score = 0;
let name;
const len = questions;

function test() {
	$('body').empty();

	$('body').append('<p></p>');

	$('body').append('<input type="text">');

	$('body').append('<button onclick="check()">Ответить</button>');

	$('p').text(questions[0])

}

function check() {
	let otvet = $('input').val().toLowerCase()

	if (otvet == answers[0]) {
		score++;
	}

	questions.shift(); //Эта функция отвечает за удаление первого массива 
	answers.shift();

	if (questions.length != 0) {
		$('p').text(questions[0]);
		$('input').val('');
	}
	else {
		theEnd();
	}
}

function test1() {

	
	
	for(let i = 0; i < questions.length; i++) {
		let q = questions[i];
		let a = answers[i];
		let otvet = prompt("Вопрос №" + (i+1) + ": " + q);

		if (otvet == a) {
			score++;
		}
	}
	alert(name + ", вы набрали " + score + "/" + questions.length + " баллов.");
}
function theEnd() {
	$('Body').empty().append('<h1>name + ", вы набрали ' + score + '/' + questions.length + "баллов");
	$('Body').prepend()
}
function start() { 
	$('body').empty();
	// Удаляем элемент с id="start"
	$('#start').remove();
	$('p').css('color', 'yellow')
	// Создаём абзац с текстом 
	$('body').append('<p>Введите своё имя</p>');
	$('p').css('color', 'red')
	//Создаём поле для ввода
	$('body').append('<input type="text" id="name">');
	$('p').attr('placeholder')
	//Создаём кнопку для отправки
	$('body').append('<input type="submit" id="send">');
	
	//Задаём атрибут onclick значение "название функции";
	$('#send').attr('onclick', 'getName()');
	//empty 
}

