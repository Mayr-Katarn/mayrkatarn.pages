"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(to, from, next) {
  if (_store["default"].getters.user) {
    next();
  } else {
    next('/mayrkatarn.pages/app-evil-2/login?loginError=true');
  }
}