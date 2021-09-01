let tab = function () {
    let tabNav = document.querySelectorAll('.location-description__item')
    let tabContent = document.querySelectorAll('.tab')
    let tabName;

    tabNav.forEach(item=> {
        item.addEventListener('click', selectTabNav)
    })
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();


var navMain = document.querySelector('.page-header__nav');
  var navToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('page-header--closed')) {
      navMain.classList.remove('page-header--closed');
      navMain.classList.add('page-header--opened');
    } else {
      navMain.classList.add('page-header--closed');
      navMain.classList.remove('page-header--opened');
    }
  });