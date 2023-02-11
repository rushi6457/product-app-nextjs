"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProduct = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deleteProduct = function deleteProduct(id) {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _types.DELETE_LOADING
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("http://localhost:8080/deleteProduct/".concat(id)));

          case 4:
            dispatch({
              type: _types.DELETE_SUCCESS
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _types.DELETE_ERROR
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 7]]);
  };
};

exports.deleteProduct = deleteProduct;