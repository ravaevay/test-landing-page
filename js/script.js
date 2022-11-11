document.addEventListener("DOMContentLoaded", onDOMReady);
let menu = document.getElementById('header');
let hMenu = menu.offsetHeight;
let logo = document.getElementById('logo');
let pTopDiv = document.getElementById("slogan");
let getPropDiv = window.getComputedStyle(pTopDiv, null).getPropertyValue("padding-top");
let topDiv = document.getElementById('top');
let menuItemLinks = document.getElementsByClassName('menu_item_link');

let technologyDiv = document.getElementById('technology');
let projectsDiv = document.getElementById('projects');
let blackMainDiv = document.getElementById('blackMainDiv');
let blackFooterDiv = document.getElementById('blackFooterDiv');
let mainDiv = document.getElementById('main');
let footerDiv = document.getElementById('contacts');
let custDiv = document.getElementById('customers');
let hTopDiv = topDiv.offsetHeight;
let hMainDiv = mainDiv.offsetHeight;
let hTechnologyDiv = technologyDiv.offsetHeight;
let hProjectsDiv = projectsDiv.offsetHeight;
let hfooterDiv = footerDiv.offsetHeight;
let hCustDiv = custDiv.offsetHeight;
let hViewHight = window.screen.availHeight;
let body = document.getElementsByTagName('body')[0];
body.style.height = (hTopDiv + hMainDiv + hfooterDiv) + "px";

function removePx(str) {
  let indPx = str.indexOf("px");
  str = (indPx != -1) ? str.substring(0, indPx) : str;
  return str;
}

let propDiv = 1.1 * removePx(getPropDiv);

function onDOMReady() {

  window.addEventListener('scroll', onWindowScroll);

  function onWindowScroll() {

    let toTopHeiht = window.document.scrollingElement.scrollTop;

    var blueTopPart = topDiv.scrollHeight;
    if ((toTopHeiht >= blueTopPart) && !(toTopHeiht >= (hTopDiv + hMainDiv)) && (toTopHeiht <= (hTopDiv + hMainDiv + hfooterDiv))) {
      menu.classList.add("whiteHeader");
    } else {
      menu.classList.remove("whiteHeader");
    }


    let topDivBottom = topDiv.getBoundingClientRect().bottom;
    if (toTopHeiht > topDivBottom) {
      blackMainDiv.style.opacity = Math.max(0, Math.min(1, topDivBottom / 1000));
    }


    if (toTopHeiht > pTopDiv.offsetHeight) {
      unselectMenuItems();
      if (toTopHeiht >=  hTopDiv && toTopHeiht < (hTopDiv + hMainDiv)) {
        mainDiv.style.position = "absolute";
        mainDiv.style.top =  hTopDiv + "px";
        let mainDivBottom = mainDiv.getBoundingClientRect().bottom;
        if (toTopHeiht - mainDivBottom > mainDivBottom) {
          blackFooterDiv.style.opacity = Math.max(0, Math.min(1, mainDivBottom / 1000));
        }
      } else if (toTopHeiht < hTopDiv) {
        mainDiv.style.position = "";
        mainDiv.style.top = "";
        selectMenuItem("about");
      }
      if ((toTopHeiht >=  hTopDiv) && (toTopHeiht < hTopDiv + hProjectsDiv)) {
        selectMenuItem("projects");
      }
      if((toTopHeiht >= (hTopDiv + hProjectsDiv)) && (toTopHeiht < (hTopDiv + hProjectsDiv + hTechnologyDiv))){
        selectMenuItem("technology");
      }
      if((toTopHeiht >= (hTopDiv + hProjectsDiv + hTechnologyDiv)) && (toTopHeiht < (hTopDiv + hProjectsDiv + hTechnologyDiv + hCustDiv))){
        selectMenuItem("customers");
      }
      if ((toTopHeiht >= ( hTopDiv + hMainDiv)) && (toTopHeiht < (hTopDiv + hMainDiv + hfooterDiv))) {
        footerDiv.style.position = "absolute";
        footerDiv.style.top = hTopDiv + hMainDiv + "px";
        selectMenuItem("contacts");
      } else if (toTopHeiht < hTopDiv + hMainDiv) {
        footerDiv.style.position = "";
        footerDiv.style.top = "";
      }
    } else {
      unselectMenuItems();
    }
  }

}

window.addEventListener('DOMContentLoaded', () => {
  var curYearCopyrightElem = document.getElementById('curYearCopyright');
  curYearCopyrightElem.innerText = new Date().getFullYear();
  const mobileMenu = document.getElementById('mobile_menu');
  const mobileMenuItems = document.getElementById('mobile_menu_items');

  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile_menu_active');
    mobileMenuItems.classList.toggle('mobile_menu_items_active');
  });

  document.addEventListener('click', (event) => {

    if (!mobileMenuItems.contains(event.target) && !mobileMenu.contains(event.target) && mobileMenu.classList.contains('mobile_menu_active')) {
      mobileMenu.classList.toggle('mobile_menu_active');
      mobileMenuItems.classList.toggle('mobile_menu_items_active');
    }
  });

  const anchors = document.querySelectorAll('nav a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      let blockID = anchor.getAttribute('href').substring(1);
      unselectMenuItems();
      if (blockID == "projects") {
        window.scrollTo({
          top: (hTopDiv + 50),
          behavior: 'smooth',
          block: 'start'
        });
      }
      else if (blockID == "technology") {
        window.scrollTo({
          top: (hTopDiv + hProjectsDiv),
          behavior: 'smooth',
          block: 'start'
        });
      }
      else if (blockID == "customers") {
        window.scrollTo({
          top: (hTopDiv + hProjectsDiv + hTechnologyDiv),
          behavior: 'smooth',
          block: 'start'
        });
      }
      else if (blockID == "contacts") {
        window.scrollTo({
          top: (hTopDiv + hProjectsDiv + hTechnologyDiv + hCustDiv),
          behavior: 'smooth',
          block: 'start'
        });
      }
      else if (blockID == "") {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
          block: 'start'
        });
      }
      else {
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

      selectMenuItem(blockID);
    })
  }

  logo.addEventListener('click', function (e) {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      block: 'start'
    });
  });
})

function selectMenuItem(blockID) {
  let selectedAllMenuItems = document.querySelectorAll('a[href*="#' + blockID + '"]');
  for (let selectedMenuItem of selectedAllMenuItems) {
    selectedMenuItem.classList.add("menu_item_selected");
    selectedMenuItem.style.color = "";
  }
}

function unselectMenuItems() {
  let allMenuItems = document.querySelectorAll('a[href*="#"]');
  for (let allMenuItem of allMenuItems) {
    allMenuItem.classList.remove("menu_item_selected");
    allMenuItem.style.color = "";
  }
}