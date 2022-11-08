/*$ (function(){

$('.header__menu-btn').on('click', function(){
  $('.header__menu-btn').toggleClass('active');
   $('.header__menu-list').toggleClass('active');

});
});
*/
function burgerMenu(selector) {
  let menu =  $(selector);
  let button = menu.find('.header__menu-btn');/*передаем кнопку*/
  let links = menu.find('.header__menu-link');/*передаем класс ссылка*/
  

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.on('click', () => toggleMenu());
 

  function toggleMenu(){
    menu.toggleClass('active');/*класс, который добавляется чтобы работало меню*/
    if(menu.hasClass('active')) { /*класс, который добавляется чтобы работало меню*/
      $('body').css('overflow', hidden);
    }else {
      $('body').css('overflow', 'visible');
    }
  }
}
burgerMenu('.header__menu-inner');/*передаем класс обертки, которая содержит кнопку и меню*/
