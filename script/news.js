import { newsTexts } from "../texts/newsTexts.js";
import { news } from "../texts/data/news-data.js";

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

// 1753660800, 1751587200, 1748822400, 1738281600, 1735516800, 1729468800, 1704067200


/* Добавить количество новостей и проверить, работает ли эта функция */ 
news.map((newsElem, index) => {
  if (news.length === uniqIds.length) {
    newsElem.id = uniqIds[index];
  } else {
    console.log("Исходных новостей больше, чем заготовок под новостные карточки");
  }
});

/* Отрисовываем страницу со всеми новостями */
function renderNewsList() {
  const title = document.getElementById('news-title');
  title.classList.remove("news__title_invisible");
  const app = document.getElementById('newsArticles');
  app.classList.remove("newsArticles_card_oneNews");
  app.innerHTML = `
    ${news.map(item => `
      <button class="navigate-to-article-btn" data-id="${item.id}">
        <article class="newsArticles_card">
          <img class="newsArticles_img" src=${item.img_src} alt="">
          <span class="newsArticles_topic" data-lang="topic">${item.topic}</span>
          <h4 class="newsArticles_title" data-lang="header">${item.name}</h4>
          <span class="newsArticles_date" data-lang="date">${item.date}</span>
        </article>
      </button>
    `).join('')}
  `;

    const buttons = document.querySelectorAll('.navigate-to-article-btn');
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const id = event.currentTarget.dataset.id;
        navigate(`/news/${id}`);
      });
    });

  console.log("renderNewsList");
};

/* Отрисовываем страницу с одной новостью */
function renderNewsItem(id) {
  const title = document.getElementById('news-title');
  title.classList.add("news__title_invisible");
  const app = document.getElementById('newsArticles');
  app.classList.add("newsArticles_card_oneNews");
  const newsItem = news.find(item => item.id == id);
  if (!newsItem) {
    app.innerHTML = '<h1>Новость не найдена</h1><button id="back-to-news-btn">Вернуться</button>';
    document.getElementById('back-to-news-btn').addEventListener('click', () => {
      navigate('/news');
    });
    return;
  }
  // app.innerHTML = `
  //   <h1>${newsItem.name}</h1>
  //   <p>${newsItem.content}</p>
  //   <button id="back-to-news-btn" class="back-to-news-btn">Вернуться к списку</button>
  // `;
  app.innerHTML = `
    <article class="newsArticles_wholeCard">
      <button id="back-to-news-btn" class="back-to-news-btn">← Назад к списку новостей</button>
      <span class="newsArticles_topic newsArticles_topic_wholeCard" data-lang="topic">${newsItem.topic}</span>
      <span class="newsArticles_date newsArticles_date_wholeCard" data-lang="date">${newsItem.date}</span>
      <div class="newsArticles_imgWrapper_wholeCard"> 
        <img class="newsArticles_img newsArticles_img_wholeCard" src=${newsItem.img_src} alt="">
      </div>
      <span class="newsArticles_imgDesc">${newsItem.img_desc}</span>
      <span class="newsArticles_imgAuthor">Фото: ${newsItem.img_author}</span>
      <h4 class="newsArticles_title newsArticles_title_wholeCard" data-lang="header">${newsItem.name}</h4>
      <div class="newsArticles_texts_wholeCard">
        ${newsItem.content.map(onePar => `
          <p newsArticles_text_wholeCard> 
            ${onePar}
          </p>
        `).join('')}
      </div>
      
    </article>
  `;
  document.getElementById('back-to-news-btn').addEventListener('click', () => {
    navigate('/news');
  });
};

function navigate(path) {
  window.history.pushState({}, '', path);
  router();
};

function router() {
  const path = window.location.pathname;
  console.log(path);

  // Теперь главная страница - это /news
  if (path === '/news' || path === '/news/' || path === '/news.html') {
    renderNewsList();
  } else if (path.startsWith('/news/')) {
    const id = path.split('/').pop();
    renderNewsItem(id);
  } else {
    document.getElementById('newsArticles').innerHTML = '<h1>Страница не найдена (404)</h1>';
  }
};

window.onpopstate = router;
document.addEventListener('DOMContentLoaded', router);
