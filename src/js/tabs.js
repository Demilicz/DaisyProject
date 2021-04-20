const images = document.querySelectorAll('.portfolio__card');
const colectionsImg = [...images].reduce(imgHandler,[]);

const tab1 = document.querySelector('._all');
const tab2 = document.querySelector('._enter');
const tab3 = document.querySelector('._sport');
const tab4 = document.querySelector('._business');
const tab5 = document.querySelector('._build');

const parentTabs = document.querySelector('.portfolio__images');

const blocksList = document.querySelectorAll('.portfolio__card');
const tabsList = document.querySelectorAll('.portfolio__link');

tab1.addEventListener("click", () => tabsListener("portfolio__card"));
tab2.addEventListener("click", () => tabsListener("card_enter"));
tab3.addEventListener("click", () => tabsListener("card_sport"));
tab4.addEventListener("click", () => tabsListener("card_business"));
tab5.addEventListener("click", () => tabsListener("card_build"));


  // handlers

  function imgHandler(acc, img ){
    acc.push({"classes": img.classList.value, "src" : img.firstChild.alt });
    return acc;
  };

  function tabsListener(cls) {

    parentTabs.innerHTML = '';
    colectionsImg.forEach(element => {

      if(element.classes.includes(cls)) {

      parentTabs.innerHTML +=`<div class="${element.classes}"><img src="${element.src}"></div>`;

    }
  });
}







