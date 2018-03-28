import $ from "jquery";

class MobileMenu {
  constructor() {
    this.header = $(".header");
    this.menuIcon = $(".header__menu-icon");
    this.menuContent = $(".header__menu-content");
    this.crossIcon = $(".header__menu-icon__middle");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("header__menu-content--show");
    this.header.toggleClass("header--is-expanded");
    this.crossIcon.toggleClass("header__menu-icon__middle--tapped");
  }
}

export default MobileMenu;
