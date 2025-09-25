import { news } from "../texts/data/news-data.js";
import { changeLang } from "./texts.js";

console.log(news);

/* Отрисовываем страницу со всеми новостями */
function renderNewsList() {
  const title = document.getElementById('news-title');
  title.classList.remove("news__title_invisible");
  const app = document.getElementById('newsArticles');
  app.classList.remove("newsArticles_card_oneNews");
  app.innerHTML = `
    ${news.map(item =>`
      <button class="navigate-to-article-btn" data-id="${item.id}">
        <article class="newsArticles_card">
          <img class="newsArticles_img" src=${item.img_src} alt="">
          <span class="newsArticles_topic" data-lang="topic"></span>
          <h4 class="newsArticles_title" data-lang="header"></h4>
          <span class="newsArticles_date" data-lang="date"></span>
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
  
  // Вызов этой функции тут нужен для того, чтобы после отрисовки страницы автоматически
  // подтягивался перевод на нужном языке. Иначе будет просто пустое поле (без текста)
  changeLang();
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
  app.innerHTML = `
    <article class="newsArticles_wholeCard">
      <button id="back-to-news-btn" class="back-to-news-btn">← Назад к списку новостей</button>
      <span class="newsArticles_topic newsArticles_topic_wholeCard" data-lang="topic">${newsItem.topic_ru}</span>
      <span class="newsArticles_date newsArticles_date_wholeCard" data-lang="date">${newsItem.date}</span>
      <div class="newsArticles_imgWrapper_wholeCard"> 
        <img class="newsArticles_img newsArticles_img_wholeCard" src=${newsItem.img_src} alt="">
      </div>
      <span class="newsArticles_imgDesc">${newsItem.img_desc}</span>
      <span class="newsArticles_imgAuthor">Фото: ${newsItem.img_author}</span>
      <h4 class="newsArticles_title newsArticles_title_wholeCard" data-lang="header">${newsItem.header_ru}</h4>
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


