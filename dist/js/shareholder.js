"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener('DOMContentLoaded', function () {
  var curYearCopyrightElem = document.getElementById('curYearCopyright');
  curYearCopyrightElem.innerText = new Date().getFullYear();
  var mobileMenu = document.getElementById('mobile_menu');
  var mobileMenuItems = document.getElementById('mobile_menu_items');
  mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('mobile_menu_active');
    mobileMenuItems.classList.toggle('mobile_menu_items_active');
  });
  document.addEventListener('click', function (event) {
    if (!mobileMenuItems.contains(event.target) && !mobileMenu.contains(event.target) && mobileMenu.classList.contains('mobile_menu_active')) {
      mobileMenu.classList.toggle('mobile_menu_active');
      mobileMenuItems.classList.toggle('mobile_menu_items_active');
    }
  });
  var anchors = document.querySelectorAll('nav a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substring(1);
        unselectMenuItems();

        if (blockID == "projects") {
          window.scrollTo({
            top: hTopDiv + 50,
            behavior: 'smooth',
            block: 'start'
          });
        } else if (blockID == "technology") {
          window.scrollTo({
            top: hTopDiv + hProjectsDiv,
            behavior: 'smooth',
            block: 'start'
          });
        } else if (blockID == "customers") {
          window.scrollTo({
            top: hTopDiv + hProjectsDiv + hTechnologyDiv,
            behavior: 'smooth',
            block: 'start'
          });
        } else if (blockID == "contacts") {
          window.scrollTo({
            top: hTopDiv + hProjectsDiv + hTechnologyDiv + hCustDiv,
            behavior: 'smooth',
            block: 'start'
          });
        } else if (blockID == "") {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        selectMenuItem(blockID);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  logo.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      block: 'start'
    });
  });
});

function selectMenuItem(blockID) {
  var selectedAllMenuItems = document.querySelectorAll('a[href*="#' + blockID + '"]');

  var _iterator2 = _createForOfIteratorHelper(selectedAllMenuItems),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var selectedMenuItem = _step2.value;
      selectedMenuItem.classList.add("menu_item_selected");
      selectedMenuItem.style.color = "";
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function unselectMenuItems() {
  var allMenuItems = document.querySelectorAll('a[href*="#"]');

  var _iterator3 = _createForOfIteratorHelper(allMenuItems),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var allMenuItem = _step3.value;
      allMenuItem.classList.remove("menu_item_selected");
      allMenuItem.style.color = "";
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}