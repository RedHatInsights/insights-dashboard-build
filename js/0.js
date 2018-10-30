(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./src/PresentationalComponents/GaugeWidget/GaugeWidget.js":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/GaugeWidget/GaugeWidget.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _asyncComponent = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");

var _asyncComponent2 = _interopRequireDefault(_asyncComponent);

__webpack_require__(/*! ./_ins-c-gauge-widget.scss */ "./src/PresentationalComponents/GaugeWidget/_ins-c-gauge-widget.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContent = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../Modal/ModalContent.js */ "./src/PresentationalComponents/Modal/ModalContent.js", 7));
});

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

var GaugeWidget = function (_Component) {
    (0, _inherits3.default)(GaugeWidget, _Component);

    function GaugeWidget(props) {
        (0, _classCallCheck3.default)(this, GaugeWidget);

        var _this = (0, _possibleConstructorReturn3.default)(this, (GaugeWidget.__proto__ || Object.getPrototypeOf(GaugeWidget)).call(this, props));

        _this.state = {
            isModalOpen: false,
            variant: _this.props.variant
        };
        _this.handleModalToggle = _this.handleModalToggle.bind(_this);
        _this.entitleToggle = _this.entitleToggle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(GaugeWidget, [{
        key: 'handleModalToggle',
        value: function handleModalToggle() {
            this.setState(function (_ref) {
                var isModalOpen = _ref.isModalOpen;
                return {
                    isModalOpen: !isModalOpen
                };
            });
        }
    }, {
        key: 'entitleToggle',
        value: function entitleToggle() {
            this.setState({
                variant: 'active'
            });
            this.setState(function (_ref2) {
                var isModalOpen = _ref2.isModalOpen;
                return {
                    isModalOpen: !isModalOpen
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            // Set the check isModalOpen to false
            var isModalOpen = this.state.isModalOpen;

            // set the change to positive by default, unless defined as negative
            // effect sets color on metrics, eg. negative = red, otherwise default = green

            var effect = this.props.negative ? 'ins-m-negative' : '';
            // set change arrow icon set to increase by default, unless defined as decrease
            // changeIndicator sets icon to `up` or `down`, eg. default = up, decrease = down
            var changeIndicator = this.props.decrease ? 'down' : 'up';

            var gaugeWidgetClasses = (0, _classnames2.default)(this.props.className, 'ins-c-gauge-widget', (0, _defineProperty3.default)({}, 'ins-c-gauge-widget-' + this.state.variant, this.state.variant), (0, _defineProperty3.default)({}, 'ins-c-gauge-widget--disabled ins-c-gauge-widget-disabled__' + this.state.variant, this.state.variant !== 'active'));

            var changeClasses = (0, _classnames2.default)('ins-c-gauge-widget__metrics-change', effect);

            function capitalize(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            var renderModal = _react2.default.createElement(
                _reactCore.Modal,
                {
                    isLarge: true,
                    title: capitalize(this.props.label),
                    isOpen: isModalOpen,
                    onClose: this.handleModalToggle,
                    actions: [_react2.default.createElement(
                        _reactCore.Button,
                        { key: 'cancel', variant: 'secondary', onClick: this.handleModalToggle },
                        'Cancel'
                    ), _react2.default.createElement(
                        _reactCore.Button,
                        { key: 'confirm', variant: 'primary', onClick: this.entitleToggle },
                        'Confirm'
                    )] },
                _react2.default.createElement(ModalContent, { variant: this.state.variant, app: this.props.label })
            );

            var variantLegend = void 0;
            var variantType = void 0;
            if (this.state.variant === 'notSetUp' || this.state.variant === 'notEntitled') {
                switch (this.state.variant) {
                    case 'notEntitled':
                        variantLegend = _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(
                                _reactCore.StackItem,
                                null,
                                ' ',
                                capitalize(this.props.label),
                                ' Is not entitled '
                            ),
                            _react2.default.createElement(
                                _reactCore.StackItem,
                                null,
                                _react2.default.createElement(
                                    _reactCore.Button,
                                    { onClick: this.handleModalToggle },
                                    ' Start Evaluation '
                                ),
                                renderModal
                            ),
                            _react2.default.createElement(
                                _reactCore.StackItem,
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Find out more'
                                    )
                                ),
                                ' '
                            )
                        );
                        variantType = 'not entitled';
                        break;
                    case 'notSetUp':
                        variantType = 'not set up';
                        variantLegend = _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(
                                _reactCore.StackItem,
                                null,
                                ' ',
                                capitalize(this.props.label),
                                ' Is not set up '
                            ),
                            _react2.default.createElement(
                                _reactCore.StackItem,
                                null,
                                _react2.default.createElement(
                                    _reactCore.Button,
                                    { onClick: this.handleModalToggle },
                                    ' Get Started '
                                ),
                                renderModal
                            )
                        );
                }
            }

            if (this.state.variant === 'notSetUp' || this.state.variant === 'notEntitled') {
                return _react2.default.createElement(
                    'div',
                    { className: gaugeWidgetClasses, id: this.props.id, 'aria-label': this.props.label + ' is ' + variantType },
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-c-gauge-widget__graph pf-u-text-align-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-c-gauge-widget__metrics' },
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-c-gauge-widget__metrics-percentage' },
                                ' 0% '
                            )
                        ),
                        _react2.default.createElement(_insightsFrontendComponents.Gauge, {
                            label: this.props.label, value: 0, width: this.props.width,
                            flipFullColors: this.props.flipFullColors, height: this.props.height,
                            identifier: this.props.identifier })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-c-gauge-widget__disabled--legend' },
                        _react2.default.createElement(
                            _reactCore.Stack,
                            { gutter: 'sm' },
                            variantLegend
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: gaugeWidgetClasses, id: this.props.id },
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-c-gauge-widget__graph pf-u-text-align-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-c-gauge-widget__metrics' },
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-c-gauge-widget__metrics-percentage' },
                                this.props.value,
                                '%'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: changeClasses },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'ins-c-gauge-widget__metrics-change-text' },
                                    this.props.changeValue,
                                    '% ',
                                    _react2.default.createElement('i', { className: 'fas fa-caret-' + changeIndicator })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'ins-c-gauge-widget__metrics-change-timeframe' },
                                    'Last ',
                                    this.props.timeframe,
                                    ' days'
                                )
                            )
                        ),
                        _react2.default.createElement(_insightsFrontendComponents.Gauge, {
                            label: this.props.label, value: this.props.value, width: this.props.width,
                            flipFullColors: this.props.flipFullColors, height: this.props.height,
                            identifier: this.props.identifier })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-c-gauge-widget__legend' },
                        this.props.children
                    )
                );
            }
        }
    }]);
    return GaugeWidget;
}(_react.Component);

exports.default = GaugeWidget;


GaugeWidget.propTypes = {
    children: _propTypes2.default.any.isRequired,
    className: _propTypes2.default.string,
    id: _propTypes2.default.string,
    height: _propTypes2.default.number,
    identifier: _propTypes2.default.string,
    label: _propTypes2.default.string,
    value: _propTypes2.default.number,
    width: _propTypes2.default.number,
    negative: _propTypes2.default.bool,
    changeValue: _propTypes2.default.string,
    decrease: _propTypes2.default.bool,
    flipFullColors: _propTypes2.default.bool,
    timeframe: _propTypes2.default.string,
    variant: _propTypes2.default.oneOf(['active', 'notEntitled', 'notSetUp'])
};

GaugeWidget.defaultProps = {
    variant: 'active'
};

/***/ }),

/***/ "./src/PresentationalComponents/GaugeWidget/_ins-c-gauge-widget.scss":
/*!***************************************************************************!*\
  !*** ./src/PresentationalComponents/GaugeWidget/_ins-c-gauge-widget.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/0.js.map