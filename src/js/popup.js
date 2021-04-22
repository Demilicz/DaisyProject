const popupsLink = document.querySelectorAll('.portfolio__card');
const popupsCloses = document.querySelectorAll('.popup__close');
const popupsArea = document.querySelectorAll('.popup_area');
const popups = document.querySelectorAll('.popup');


popupsLink.forEach( popup => {
  popup.addEventListener('click', ()=> {
    document.body.classList.add('_lock');
  })
});
popupsCloses.forEach( popup => {
  popup.addEventListener('click', ()=> {
    document.body.classList.remove('_lock');
  })
});
popupsArea.forEach( pop => {
  pop.addEventListener('click', ()=> {
    document.body.classList.remove('_lock');
  })
});

