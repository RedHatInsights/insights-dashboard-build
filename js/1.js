(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/PresentationalComponents/Modal/ModalContent.js":
/*!************************************************************!*\
  !*** ./src/PresentationalComponents/Modal/ModalContent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */

var ModalContent = function ModalContent(_ref) {
    var app = _ref.app,
        variant = _ref.variant,
        className = _ref.className,
        props = (0, _objectWithoutProperties3.default)(_ref, ['app', 'variant', 'className']);


    var modalClasses = (0, _classnames2.default)('ins-c-modal__content', className);

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return {
        notEntitled: _react2.default.createElement(
            'p',
            (0, _extends3.default)({ className: modalClasses }, props),
            ' Would you like to activate an evaluation? '
        ),
        notSetUp: _react2.default.createElement(
            'p',
            (0, _extends3.default)({ className: modalClasses }, props),
            ' Would you like to set up ',
            capitalize(app),
            '? '
        )
    }[variant];
};

exports.default = ModalContent;


ModalContent.propTypes = {
    app: _propTypes2.default.string,
    variant: _propTypes2.default.string,
    className: _propTypes2.default.string
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/1.js.map