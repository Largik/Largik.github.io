console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms[1].buttonSubmit;
buttonsubmit.addEventListener("click", buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();

	if (document.forms[1].FormInputHeaderNews.value == '') {
		Swal.fire(
			'Ошибка!',
			'Вы не ввели наименование новости!',
			'error'
		)
		console.log("Вы не ввели наименование новости!");
		return
	}
	if (document.forms[1].FormInputNews.value == '') {
		Swal.fire(
			'Ошибка!',
			'Вы не написали новость!',
			'error'
		)
		console.log("Вы не написали новость!");
		return
	}
	if (document.forms[1].FormInputAuthor.value == '' && document.forms[1].invalidCheck.checked == false) {
		Swal.fire(
			'Ошибка!',
			'Вы не ввели автора! Или не поставили галочку в поле Анонимно.',
			'error'
		)
		console.log("Вы не ввели автора! Или не поставили галочку в поле Анонимно.");
		return
	}
	formData.append('newsName', document.forms[1].FormInputHeaderNews.value);
	formData.append('newsAuthor', document.forms[1].FormInputAuthor.value);
	if (document.forms[1].invalidCheck.checked == false) {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Наименование новости " + formData.get("newsName") + " под аворством " + formData.get("newsAuthor"),
			showConfirmButton: false,
			timer: 1500
		}
		)
	} else {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Наименование новости " + formData.get("newsName") + " анонимно",
			showConfirmButton: false,
			timer: 1500
		}
		)
	}
	setTimeout(function () { document.location.href = ""; }, 1500);
	console.log("Новость добавлена в предложенные");

}