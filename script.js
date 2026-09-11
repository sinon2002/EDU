document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const stage2 = document.getElementById('stage2');

    toggleBtn.addEventListener('click', () => {
        stage2.classList.toggle('active');
    });
});
// Добавьте этот код внутрь события DOMContentLoaded в вашем файле script.js

const track = document.getElementById("kcBrandsPolaroidTrack");

if (track) {
  // Клонируем 6 карточек несколько раз, чтобы создать длинную непрерывную ленту без пустот
  const originalCards = Array.from(track.children);
  for (let i = 0; i < 4; i++) {
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });
  }

  let currentPos = 0;
  // Задаем комфортную скорость движения бегущей строки (1.0 — плавно и мягко)
  const speed = 1.0; 

  // Рассчитываем точную ширину одного оригинального круга (6 карточек) для бесшовного перезапуска
  // Ширина карточки (250px) + отступ (24px) * 6 штук
  const blockWidth = (250 + 24) * 6;

  function animateBrandsMarquee() {
    currentPos += speed;
    
    // Как только первый круг из 6 карточек полностью уехал за экран, мгновенно сбрасываем в 0
    if (currentPos >= blockWidth) {
      currentPos = 0;
    }
    
    track.style.transform = `translateX(${-currentPos}px)`;
    requestAnimationFrame(animateBrandsMarquee);
  }

  // Запуск бегущей строки без остановок от наведения мыши
  requestAnimationFrame(animateBrandsMarquee);
}
// Функция для плавного открытия и закрытия шагов (аккордеон)
function toggleStep(element) {
  const item = element.parentElement;
  const content = item.querySelector('.kc-step-content');
  const isOpen = item.classList.contains('kc-step-active');
  
  // Закрываем все открытые шаги перед открытием нового (опционально)
  document.querySelectorAll('.kc-step-item').forEach(el => {
    el.classList.remove('kc-step-active');
    const stepContent = el.querySelector('.kc-step-content');
    if (stepContent) stepContent.style.maxHeight = null;
  });

  // Если шаг не был открыт, открываем его
  if (!isOpen) {
    item.classList.add('kc-step-active');
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// Добавьте этот фрагмент в общую область события DOMContentLoaded в script.js
document.addEventListener("DOMContentLoaded", function() {
  const firstTrigger = document.querySelector('.kc-step-trigger');
  if (firstTrigger) toggleStep(firstTrigger);
});
// Скрипт мгновенного переключения вкладок цен
function switchPriceTab(event, tabId) {
  // Убираем активный класс у всех кнопок
  document.querySelectorAll('.kc-tab-btn').forEach(btn => btn.classList.remove('active'));
  // Убираем активный класс у всех блоков с контентом
  document.querySelectorAll('.kc-price-content').forEach(content => content.classList.remove('active'));

  // Добавляем класс нажатой кнопке
  event.currentTarget.classList.add('active');
  // Показываем нужный блок тарифов
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}
// Универсальный плавный JS-скрипт аккордеона FAQ
function toggleFaq(element) {
  const item = element.parentElement;
  const panel = item.querySelector('.kc-faq-panel');
  const isOpen = item.classList.contains('kc-faq-active');
  
  // Закрываем другие открытые вопросы, чтобы страница не растягивалась (аккуратный режим)
  document.querySelectorAll('.kc-faq-item').forEach(el => {
    el.classList.remove('kc-faq-active');
    const faqPanel = el.querySelector('.kc-faq-panel');
    if (faqPanel) faqPanel.style.maxHeight = null;
  });

  // Если кликнули по закрытому — плавно открываем его
  if (!isOpen && panel) {
    item.classList.add('kc-faq-active');
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

// Добавьте этот фрагмент внутрь события DOMContentLoaded в вашем файле script.js
document.addEventListener("DOMContentLoaded", function() {
  const firstFaqTrigger = document.querySelector('.kc-faq-trigger');
  if (firstFaqTrigger) toggleFaq(firstFaqTrigger);
});
// Функция последовательного переключения экранов Hero-секции (stage1 -> stage2)
function playSeq() {
  const s1 = document.getElementById('stage1');
  const s2 = document.getElementById('stage2');
  
  if (s1 && s2) {
    s2.classList.remove('active');
    s1.style.opacity = '1'; 
    s2.style.opacity = '0';
    
    setTimeout(function() {
      s1.style.opacity = '0';
      s2.style.opacity = '1';
      requestAnimationFrame(function() { 
        s2.classList.add('active'); 
      });
    }, 1700);
  }
}

// Регистрация событий при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    // Кнопка перезапуска анимации (убедитесь, что кнопка имеет id="replay")
    const replayBtn = document.getElementById('replay');
    if (replayBtn) {
        replayBtn.addEventListener('click', playSeq);
    }
    
    // Запуск анимации сразу после полной загрузки всех картинок и стилей окна
    window.addEventListener('load', playSeq);
});
/* =========================================================
   KYRGYZ CONCEPT — EDUCATION ABROAD
   script.js — вся логика сайта в одном файле
   ========================================================= */

/* ---------------------------------------------------------
   1. HERO: анимация "центр -> в сторону"
   --------------------------------------------------------- */
function playHeroSequence() {
  var stage1 = document.getElementById('stage1');
  var stage2 = document.getElementById('stage2');
  if (!stage1 || !stage2) return;

  stage2.classList.remove('active');
  stage1.style.opacity = '1';
  stage2.style.opacity = '0';

  setTimeout(function () {
    stage1.style.opacity = '0';
    stage2.style.opacity = '1';
    requestAnimationFrame(function () {
      stage2.classList.add('active');
    });
  }, 1700);
}

/* ---------------------------------------------------------
   2. Блок "Как мы работаем" — аккордеон шагов
   --------------------------------------------------------- */
function toggleStep(triggerEl) {
  var item = triggerEl.parentElement;
  var content = item.querySelector('.kc-step-content');
  var isOpen = item.classList.contains('kc-step-active');

  document.querySelectorAll('.kc-step-item').forEach(function (el) {
    el.classList.remove('kc-step-active');
    el.querySelector('.kc-step-content').style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add('kc-step-active');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

/* ---------------------------------------------------------
   3. FAQ — аккордеон вопросов/ответов
   --------------------------------------------------------- */
function toggleFaq(triggerEl) {
  var item = triggerEl.parentElement;
  var panel = item.querySelector('.kc-faq-panel');
  var isOpen = item.classList.contains('kc-faq-active');

  document.querySelectorAll('.kc-faq-item').forEach(function (el) {
    el.classList.remove('kc-faq-active');
    el.querySelector('.kc-faq-panel').style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add('kc-faq-active');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
}

/* ---------------------------------------------------------
   4. Услуги и стоимость — переключение вкладок
   --------------------------------------------------------- */
function switchPriceTab(event, tabId) {
  document.querySelectorAll('.kc-tab-btn').forEach(function (btn) {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.kc-price-content').forEach(function (content) {
    content.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

/* ---------------------------------------------------------
   5. Университеты-партнёры — бесконечная бегущая лента
   --------------------------------------------------------- */
function initBrandsMarquee() {
  var track = document.getElementById('kcBrandsPolaroidTrack');
  if (!track) return;

  var originalCards = Array.from(track.children);
  for (var i = 0; i < 4; i++) {
    originalCards.forEach(function (card) {
      track.appendChild(card.cloneNode(true));
    });
  }

  var currentPos = 0;
  var speed = 1.0;
  var blockWidth = (250 + 24) * originalCards.length;

  function animate() {
    currentPos += speed;
    if (currentPos >= blockWidth) currentPos = 0;
    track.style.transform = 'translateX(' + (-currentPos) + 'px)';
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* ---------------------------------------------------------
   6. Форма заявки в футере — демо-отправка
   --------------------------------------------------------- */
function initFooterForm() {
  var form = document.querySelector('.kc-form-body');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Заявка успешно отправлена!');
    form.reset();
  });
}

/* ---------------------------------------------------------
   INIT: запуск всего при загрузке страницы
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  var replayBtn = document.getElementById('replay');
  if (replayBtn) replayBtn.addEventListener('click', playHeroSequence);

  var firstStepTrigger = document.querySelector('.kc-step-trigger');
  if (firstStepTrigger) toggleStep(firstStepTrigger);

  var firstFaqTrigger = document.querySelector('.kc-faq-trigger');
  if (firstFaqTrigger) toggleFaq(firstFaqTrigger);

  initBrandsMarquee();
  initFooterForm();
});

window.addEventListener('load', playHeroSequence);