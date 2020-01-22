function getName() {
	let name = prompt("Введите своё имя...");

	if (name == "" || name == null) {
		name = "Ученик";
	}

	alert(name +", нажми ОК, чтобы начать тест");
	return name;
}

function test() {
	const name = getName();

	const questions = ["вопрос1, вопрос2..."];
	const answers = ["да", "нет"];

	console.log(name)
	let score = 0;
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