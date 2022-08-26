const menu = document.getElementById('menu')
const btnOpen = document.getElementById('menu_open')
const btnClose = document.getElementById('menu_close')

btnClose.onclick = function () {
  menu.classList.remove('show--menu')
}

btnOpen.onclick = function () {
  menu.classList.add('show--menu')
}

menu.addEventListener('click', function (event) {
  if (event.target.matches('.menu__link')) {
    menu.classList.remove('show--menu')
  }
})
