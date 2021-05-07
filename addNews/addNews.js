console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms.news.buttonSubmit;
buttonsubmit.addEventListener("click", buttonPressed);

function buttonPressed(evt) {
	console.log("Кнопка нажата загружен");
	evt.preventDefault();

	if (document.forms.news.FormInputHeaderNews.value == '') {
		Swal.fire(
			'Ошибка!',
			'Вы не ввели наименование новости!',
			'error'
		)
		console.log("Вы не ввели наименование новости!");
		return
	}
	if (document.forms.news.FormInputNews.value == '') {
		Swal.fire(
			'Ошибка!',
			'Вы не написали новость!',
			'error'
		)
		console.log("Вы не написали новость!");
		return
	}
	if (document.forms.news.FormInputAuthor.value == '' && document.forms.news.invalidCheck.checked == false) {
		Swal.fire(
			'Ошибка!',
			'Вы не ввели автора! Или не поставили галочку в поле Анонимно.',
			'error'
		)
		console.log("Вы не ввели автора! Или не поставили галочку в поле Анонимно.");
		return
	}
	formData.append('newsName', document.forms.news.FormInputHeaderNews.value);
	formData.append('newsAuthor', document.forms.news.FormInputAuthor.value);
	if (document.forms.news.invalidCheck.checked == false) {
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