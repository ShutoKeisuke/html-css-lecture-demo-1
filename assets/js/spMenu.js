document.addEventListener('DOMContentLoaded', () => {
  const spMenu = new SpMenu();
});

class SpMenu {
  SpMenuIcon
  SpSideMenu
  SpSideMenuItemList
  SpSideMenuBg
  SpSideMenuCloseBtn
  HTMLDom

  constructor() {
    this.SpMenuIcon = document.querySelector('.sp-menu-icon');
    this.SpSideMenu = document.querySelector('#sp-side-menu-container');
    this.SpSideMenuItemList = document.querySelectorAll('.sp-side-menu-list-container ul li');
    this.SpSideMenuBg = document.querySelector('.sp-side-menu-bg');
    this.SpSideMenuCloseBtn = document.querySelector('.sp-side-menu-close-btn');
    this.HTMLDom = document.querySelector('html');
    this.addEventSpMenu();
  }

  addEventSpMenu() {
    if (!this.SpMenuIcon || !this.SpSideMenu) return;

    this.SpMenuIcon.addEventListener('click', () => {
      this.SpMenuIcon.classList.toggle('menu-open');
      this.SpSideMenu.classList.toggle('menu-open');
      this.HTMLDom.toggleAttribute('noScroll');
    });

    this.SpSideMenuItemList.forEach(dom => {
      dom.addEventListener('click', () => {
        this.SpMenuIcon.classList.toggle('menu-open');
        this.SpSideMenu.classList.toggle('menu-open');
        this.HTMLDom.toggleAttribute('noScroll');
      });
    });

    this.SpSideMenuBg.addEventListener('click', () => {
      this.SpMenuIcon.classList.toggle('menu-open');
      this.SpSideMenu.classList.toggle('menu-open');
      this.HTMLDom.toggleAttribute('noScroll');
    });

    this.SpSideMenuCloseBtn.addEventListener('click', () => {
      this.SpMenuIcon.classList.toggle('menu-open');
      this.SpSideMenu.classList.toggle('menu-open');
      this.HTMLDom.toggleAttribute('noScroll');
    });
  }
}
