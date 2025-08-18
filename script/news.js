import { newsTexts } from "../texts/newsTexts.js";

console.log(newsTexts);

const getArticlesDates = () => {
  const allDatesArr = Object.values(newsTexts.date);
  // Собираем массив с датами статей в ISO-формате
    const pureDatesArr = allDatesArr.map((dateObj) => {
      const isoDate = dateObj.ru.split(".").reverse().join('-');
      console.log(isoDate);
      return isoDate;
    });
  return pureDatesArr;
};

// Генерируем уникальные id
const generateIds = (articlesDates) => {
  const uniqIds = articlesDates.map((date) => Math.floor(new Date(date).getTime() / 1000));
  return uniqIds;
};

const articlesDates = getArticlesDates();
console.log(articlesDates);

const uniqIds = generateIds(articlesDates);
console.log(uniqIds);

window.onload = () => {
  const navLinks = document.getElementsByClassName("route");
  for (let link of navLinks) {
    link.addEventListener("click", push);
  }
};

const push = (event) => {
  // Отменяем действие по умолчанию, которое должно произойти по клику на ссылку
  event.preventDefault();

  const {
    target: { id, classList }
  } = event;
  const url = event.target.getAttribute("href");
  console.log(url);

  // Изменяем заголовок страницы <title></title>
  document.title = id;

  // Меняем URL страницы
  // window.history.pushState({ id }, "", url);
  window.history.pushState({ id }, "", id);

  document.getElementById("main").innerHTML = <p>Это страничка</p>
};
