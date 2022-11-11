
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