import { indexTexts } from "../texts/indexTexts.js";
import { servicesTexts } from "../texts/servicesTexts.js";
import { dotPulseTexts } from "../texts/dotPulseTexts.js";
import { datasetGOATexts } from "../texts/datasetGOATexts.js";
import { softTexts } from "../texts/softTexts.js";
import { aboutTexts } from "../texts/aboutTexts.js";
import { skillsTexts } from "../texts/skillsTexts.js";
import { projectTexts } from "../texts/projectsTexts.js";
import { newsTexts, getNewsTexts } from "../texts/newsTexts.js";
import { contactsTexts } from "../texts/contactsTexts.js";

const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "en";
let currentTexts = {};


// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/products.html":
			currentTexts = dotPulseTexts;
			break;
		case "/services.html":
			currentTexts = servicesTexts;
			break;
		case "/product-dataset.html":
			currentTexts = datasetGOATexts;
			break;
    case "/soft.html":
      currentTexts = softTexts;
      break;
    case "/about.html":
      currentTexts = aboutTexts;
      break;
    case "/skills.html":
      currentTexts = skillsTexts;
      break;
    case "/project.html":
      currentTexts = projectTexts;
      break;
		case "/news.html":
			// По идее, такое надо сделать для всех функций
			// Чтобы не сам объект экспортировать, а доступ к нему
      currentTexts = getNewsTexts();
      break;
    case "/contacts.html":
    currentTexts = contactsTexts;
    break;

		default:
			currentTexts = indexTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		// Выбираем все html-элементы с заданным ключом [data-lang=${key}]
		let elems = document.querySelectorAll(`[data-lang=${key}]`);
		// Если элемент такой есть и он 1, находим соответствующий объект с переводом
		if (elems && elems.length === 1) {
			elems[0].textContent = currentTexts[key][currentLang];
		}
		// Если элементов больше одного, задаём перевод для каждого элемента. 
		// В условии проверка на наличие одинакового количества элементов и полей с переводом
		// Если не хватает переводов, элементы не будут переводиться
		if (elems.length > 1 && elems.length === Object.values(currentTexts[key]).length) {
			elems.forEach((elem, index) => {
				// эта проверка на количество детей и lastChild нужны, 
				// чтобы менялся только текст (а не влжjенные в ссылки картинки, например)
				if (elem.childNodes.length > 1) {
					elem.lastChild.textContent = Object.values(currentTexts[key])[index][currentLang];
				} else {
					elem.textContent = Object.values(currentTexts[key])[index][currentLang];
				}
			})
		}
	}
}

changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__langBtn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__langBtn_active");
			btn.classList.add("header__langBtn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	// Эта проверка добавлена, чтобы на смартфонах и компах было активно соответствующее меню
	if (window.matchMedia("(max-width: 1024px)").matches) {
		switch (currentLang) {
			case "ru":
				document
					.querySelector('[data-btn="ru"]')
					.classList.add("header__langBtn_active");
				break;
			case "en":
				document
					.querySelector('[data-btn="en"]')
					.classList.add("header__langBtn_active");
				break;
	
			default:
				document
					.querySelector('[data-btn="en"]')
					.classList.add("header__langBtn_active");
				break;
		}
	} else {
		switch (currentLang) {
			case "ru":
				document
					.querySelectorAll('[data-btn="ru"]')[1]
					.classList.add("header__langBtn_active");
				break;
			case "en":
				document
					.querySelectorAll('[data-btn="en"]')[1]
					.classList.add("header__langBtn_active");
				break;
	
			default:
				document
					.querySelectorAll('[data-btn="en"]')[1]
					.classList.add("header__langBtn_active");
				break;
		}
	};

}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());

export { changeLang, checkPagePathName };
