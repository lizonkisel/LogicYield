import { news } from "./data/news-data.js";

// const setDate = () => {
// 	let dateObj = {};
// 	for (let oneNews of news) {
// 		dateObj = {
// 			...dateObj,
// 			[oneNews.id]: {
// 				ru: oneNews.date,
// 				en: oneNews.date,
// 			}
// 		}
// 	}
// 	console.log(dateObj);
// 	return dateObj;
// };

const setNewsFields = (fieldName) => {
	let fieldObj = {};
	for (let oneNews of news) {
		const fieldNameRu = `${fieldName}_ru`;
		const fieldNameEn = `${fieldName}_en`;
		if (oneNews.hasOwnProperty(fieldNameRu) && oneNews.hasOwnProperty(fieldNameEn)) {
			fieldObj = {
				...fieldObj,
				[oneNews.id]: {
					ru: oneNews[fieldNameRu],
					en: oneNews[fieldNameEn]
				}
			}
		} else {
			fieldObj = {
				...fieldObj,
				[oneNews.id]: {
					ru: oneNews[fieldName],
					en: oneNews[fieldName]
				}
			}
		}
	}
	console.log(fieldObj);
	return fieldObj;
};

const newsTexts = {
	"menu-item": {
		"1": {
			ru: "Услуги",
			en: "Services",
		},
		"2": {
			ru: "Продукты",
			en: "Products",
		},
		"3": {
			ru: "Софт",
			en: "Software",
		},
		"4": {
			ru: "Команда",
			en: "Team",
		},
		"5": {
			ru: "Новости",
			en: "News",
		},
		"6": {
			ru: "Контакты",
			en: "Contacts",
		}
	},
	"team-menu-item": {
		"1": {
			ru: "О нас",
			en: "About us",
		},
		"2": {
			ru: "Наши навыки",
			en: "Our Expertise",
		},
		"3": {
			ru: "Перспективные проекты",
			en: "Promising projects",
		}
	},
  "title": {
		ru: "Новости",
		en: "News",
	},
	"topic": setNewsFields("topic"),
	"header": setNewsFields("header"),
	"date": setNewsFields("date"),
	"legal-text": {
		ru: "Продолжая использовать сайт, Вы даете согласие ООО «ЛОДЖИК ИЛД» (ИНН 1686015257) на обработку файлов cookies и пользовательских данных, собираемых посредством агрегаторов статистики посетителей веб-сайтов, в целях ведения статистики посещений сайта в соответствии с ",
		en: "By continuing to use the website, you consent to LLC «Logic Yield» (TIN 1686015257) processing cookies and user data collected through website visitor statistics aggregators for the purpose of compiling website visit statistics in accordance with",
	},
	"policy-name": {
		ru: "Политикой обработки персональных данных",
		en: "Privacy policy",
	},
	"policy-button": {
		ru: "Согласен",
		en: "Agree",
	},
	"policy-link": {
		ru: "Политика обработки персональных данных",
		en: "Privacy policy",
	}
};

export { newsTexts }