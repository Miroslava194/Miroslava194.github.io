function getName() {
	$('body').empty();
	let name = prompt("Введите своё имя...");

	if (name == "" || name == null) {
		name = "Ученик";
	}
	
	alert(name + ", нажми ОК, чтобы начать тест");
	return name;
}
function start() {
	// Удаляем элемент с id="start"
	$('#start').remove();
	// Создаём абзац с текстом 
	$('body').append('<p>Введите своё имя</p>');
	//Создаём поле для ввода
	$('body').append('<input type="text" id="name">');
	//Создаём кнопку для отправки
	$('body').append('<input type="submit" id="send">');
	//Задаём атрибут onclick значение "название функции";
	$('#send').attr('onclick', 'getName()');
	// Удаляем все, что внутри тега body

}