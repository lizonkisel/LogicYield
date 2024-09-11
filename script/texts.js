import { indexTexts } from "../texts/indexTexts.js";
import { dotPulseTexts } from "../texts/dotPulseTexts.js";
import { datasetGOATexts } from "../texts/datasetGOATexts.js";
import { softTexts } from "../texts/softTexts.js";
import { aboutTexts } from "../texts/aboutTexts.js";
import { skillsTexts } from "../texts/skillsTexts.js";
import { projectTexts } from "../texts/projectsTexts.js";
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
    console.log(key);
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
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


// const dotPulseTexts = {
// 	"title": {
// 		ru: "Продукты",
// 		en: "Products",
// 	},
// 	"product-name": {
// 		ru: "Cистема оптического контроля сыпучих материалов “DotPulse”",
// 		en: "",
// 	},
//   "peculiarities-title": {
// 		ru: "Об устройстве",
// 		en: "About device",
// 	},
//   "": {
// 		ru: "",
// 		en: "",
// 	},
//   "": {
// 		ru: "",
// 		en: "",
// 	},
// }