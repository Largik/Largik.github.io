console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms[0].elements[1];
buttonsubmit.addEventListener( "click" , buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();
	
	if(document.forms[0].elements[0].value == 'user'){
	Swal.fire(
			'Ошибка!',
			'Вы не ввели наименование новости!',
			'error'
		)
		console.log("Вы не ввели наименование новости!");
	}
	else{
		formData.append('newsName', document.forms[0].elements[0].value);
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Наименование новости " + formData.get("newsName"),
			showConfirmButton: false,
			timer: 1500
		}
		)
		setTimeout(function() {document.location.href = "";},1500);
		console.log("Новость добавлена в предложенные");
	}
}