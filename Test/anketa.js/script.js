let imgSrc = "";
function readURL(input) {
	if (input.files && input.files[0]){
		let reader = new FileReader();

		reader.onload = function(e) {
			imgSrc = e.target.result;
		}
		reader.readAsDataURL(input.files[0]);
	}
}


function getForm() {

 	let surname = $('#surname').val();
 	let name = $('#name').val();
 	let m_name = $('#m_name').val();
 	let email = $('#email').val();
 	let phone = $('#phone').val();
 	let VK = $('#VK').val();
 	let Instagram = $('#Instagram').val();
 	let color = $('#color').val();
 	let age = calcAge();
 	let films = getFilms();
 	let gender = $('label>input[type="radio"]:checked').text();
 	//let gender = $('input[name="gender]:checked')[0].id;
 	if (gender == 'gender1'){
 		gender = 'Мужской';
 	}
 	else if (gender == 'gender2'){
 		gender = 'Женский';
 	}
 	else gender = 'Другой';



 	$('form').remove();
 	$('body').append('<h2 class="details">Фамилия: '+surname+'</h2>')
 	$('body').append('<h2 class="details">Имя: '+name+'</h2>')
 	$('body').append('<h2 class="details">Email: '+email+'</h2>')
 	$('body').append('<h2 class="details">Телефон: '+phone+'</h2>')
 	$('body').append('<h2 class="details">Ваш возраст: '+age+'</h2>')

 	$('h1').attr('class', 'red')

 	$('form').remove();

 	if (VK > 0){
 		$('body').append('<h2 class="details">Вк: '+VK+'</h2>');
 	}
 	if (Instagram > 0){
 		$('body').append('<h2 class="details">Инст: '+Instagram+'</h2>');		
 	}
 	if (name > 0){
 		$('body').append('<h1>Отчество: '+name+'</h2>');
 	}
 	$('body').append('<img src="'+imgSrc+'"</img>');
 	$('img').css({
 		border: '4px solid',
 		borderColor: color 		
 	});
 	
 	}
 	//$('body').append('<h1>'+surname + ' ' + name + ' ' + m_name + '</h1>').css('bordercolor', color);       
 	// attr('class'. 'red');
function getFilms(){
	let films = [];
	$('input[type="checkbox"]:checked').each(function() {
		films.push($(this)[0].id);
	});
	return films;
}

function calcAge() {
	//let str = $('#age').val();
	//console.log(age)
	let str = $('#age').val();
	let arr = str.split('-')
	let year = +arr[0];
	let month = +arr[1];
	let date = +arr[2];

	let now = new Date();
	// now.getFullYear() - текущий год
	// now.Month() - текущий месяц(месяца считаются с нуля)
	// now.getDate() - текущая дата
	let god = now.getFullYear() - year;
	if(now.getMonth()+1 <month) {
		god-=1
	}
	else if(now.getMonth()+1 ==month) {
		if(now.getDate()<date) {
			god-=1
		}
	}
	if(god<0){
		god=0
	}
	return god

}


function black(){
	$('body').css('backgroundColor', 'black')
	$('body').css('color', 'white')
}
function white(){
	$('body').css('backgroundColor', 'white')
	$('body').css('color', 'black')
}

window.onload = function(){
	let now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth() +1;
	let date = now.getDate();

	if (month < 10) {
		month = '0' + month;
	}
	if (date < 10) {
		date = '0'+ date;
	}

	let max = year + '-' + month + '-' + date;
	$('#age').attr('max', max);
}

	

