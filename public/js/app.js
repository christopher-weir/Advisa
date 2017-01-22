/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(5);
	__webpack_require__(6);
	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(2);

	var _product = __webpack_require__(3);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// eslint-disable-line no-unused-vars


	(0, _reactDom.render)(React.createElement(
	    'div',
	    { id: 'widget-wrap' },
	    React.createElement(_product2.default, {
	        title: 'Imaginary Product',
	        hero: 'https://placeholdit.imgix.net/~text?txtsize=70&txt=1000×666&w=1000&h=666',
	        total: 500 })
	), document.getElementById('app'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _progress = __webpack_require__(5);

	var _progress2 = _interopRequireDefault(_progress);

	var _status = __webpack_require__(6);

	var _status2 = _interopRequireDefault(_status);

	var _give = __webpack_require__(7);

	var _give2 = _interopRequireDefault(_give);

	var _tooltip2 = __webpack_require__(8);

	var _tooltip3 = _interopRequireDefault(_tooltip2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars
	// eslint-disable-line no-unused-vars
	// eslint-disable-line no-unused-vars


	// eslint-disable-line no-unused-vars

	var Product = function (_React$Component) {
	    _inherits(Product, _React$Component);

	    function Product(props) {
	        _classCallCheck(this, Product);

	        // set initial state
	        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));
	        // access props


	        _this.state = {
	            title: _this.props.title,
	            total: _this.props.total,
	            hero: _this.props.hero,
	            doners: 0,
	            current: 0
	        };

	        _this.updateTotal = _this.updateTotal.bind(_this);
	        return _this;
	    }

	    _createClass(Product, [{
	        key: 'updateTotal',
	        value: function updateTotal(_total) {

	            var current = this.state.current + _total;
	            var doners = this.state.doners + 1;

	            this.setState({
	                current: current,
	                doners: doners
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var _tooltip = null;

	            // if there is still a remaining amount add the tooltip
	            if (this.state.total - this.state.current > 0) {
	                _tooltip = _react2.default.createElement(_tooltip3.default, {
	                    total: this.state.total,
	                    current: this.state.current });
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'product-wrap' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'product-info' },
	                    _react2.default.createElement('img', {
	                        className: 'hero-image',
	                        src: this.state.hero }),
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        this.state.title
	                    )
	                ),
	                _tooltip,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'product-meta' },
	                    _react2.default.createElement(_progress2.default, {
	                        total: this.state.total,
	                        current: this.state.current }),
	                    _react2.default.createElement(_status2.default, {
	                        total: this.state.total,
	                        doners: this.state.doners,
	                        current: this.state.current }),
	                    _react2.default.createElement(_give2.default, {
	                        updateTotal: this.updateTotal })
	                )
	            );
	        }
	    }]);

	    return Product;
	}(_react2.default.Component);

	exports.default = Product;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Progress = function (_React$Component) {
	    _inherits(Progress, _React$Component);

	    function Progress() {
	        _classCallCheck(this, Progress);

	        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
	    }

	    _createClass(Progress, [{
	        key: 'currentProgress',


	        /**
	         * Return the % of the current total progress
	         */
	        value: function currentProgress() {

	            var percentage = Math.round(this.props.current / this.props.total * 100);

	            // limit it to 100%
	            return percentage > 100 ? 100 : percentage;
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var progressStyle = {
	                width: this.currentProgress() + '%',
	                backgroundColor: this.props.current >= this.props.total ? '#09b30e' : '#eb603c'
	            };

	            return _react2.default.createElement(
	                'div',
	                { className: 'progress-background' },
	                _react2.default.createElement('div', { className: 'progress-bar', style: progressStyle })
	            );
	        }
	    }]);

	    return Progress;
	}(_react2.default.Component);

	exports.default = Progress;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Status = function (_React$Component) {
	    _inherits(Status, _React$Component);

	    function Status() {
	        _classCallCheck(this, Status);

	        return _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).apply(this, arguments));
	    }

	    _createClass(Status, [{
	        key: 'pluralise',


	        /**
	         * pluralise the copy according to the amount of doners
	         */
	        value: function pluralise(_doners) {
	            return _doners > 1 ? 's' : '';
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            // set the default message
	            var message = _react2.default.createElement(
	                'p',
	                null,
	                'Be the first to donate.'
	            );

	            // if there is a current amount update the message to reflect that
	            if (this.props.current > 0) {
	                message = _react2.default.createElement(
	                    'p',
	                    null,
	                    'Join the\xA0',
	                    _react2.default.createElement(
	                        'strong',
	                        null,
	                        this.props.doners
	                    ),
	                    '\xA0other doner',
	                    this.pluralise(this.props.doners),
	                    ' who have donated\xA0',
	                    _react2.default.createElement(
	                        'strong',
	                        null,
	                        '$',
	                        this.props.current
	                    ),
	                    '.'
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'status-wrap' },
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    _react2.default.createElement(
	                        'strong',
	                        null,
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'Only 3 days left'
	                        )
	                    ),
	                    ' to fund this project.'
	                ),
	                message
	            );
	        }
	    }]);

	    return Status;
	}(_react2.default.Component);

	exports.default = Status;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Give = function (_React$Component) {
	    _inherits(Give, _React$Component);

	    function Give(props) {
	        _classCallCheck(this, Give);

	        var _this = _possibleConstructorReturn(this, (Give.__proto__ || Object.getPrototypeOf(Give)).call(this, props));

	        _this.state = {
	            amount: '',
	            disabled: true
	        };

	        _this.validateInput = _this.validateInput.bind(_this);
	        _this.updateTotal = _this.updateTotal.bind(_this);
	        return _this;
	    }

	    /**
	     * validate the input.
	     * First only update the view if it is a number
	     * Set the current state
	     */


	    _createClass(Give, [{
	        key: 'validateInput',
	        value: function validateInput(e) {

	            // convert the input to a number
	            var val = Number(e.target.value);

	            // if the val is a valid integer
	            // set that as the current value
	            // also check for negative numbers
	            if (Number.isInteger(val) && val > 0) {
	                this.setState({
	                    amount: val,
	                    disabled: false
	                });
	            }

	            // if the value is 0
	            // set to empty
	            if (val === 0) {
	                this.setState({
	                    amount: '',
	                    disabled: true
	                });
	            }
	        }

	        /**
	         * Update the app total and reset the component
	         */

	    }, {
	        key: 'updateTotal',
	        value: function updateTotal() {

	            this.props.updateTotal(this.state.amount);

	            // unfocus the input
	            this.refs.amount.blur();

	            // reset the input
	            this.setState({
	                amount: '',
	                disabled: true
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'div',
	                { className: 'give-wrap' },
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: this.updateTotal },
	                    _react2.default.createElement('input', {
	                        type: 'text',
	                        ref: 'amount',
	                        value: this.state.amount,
	                        onChange: this.validateInput }),
	                    _react2.default.createElement(
	                        'button',
	                        {
	                            type: 'submit',
	                            onClick: this.updateTotal,
	                            disabled: this.state.disabled },
	                        'Give Now'
	                    )
	                )
	            );
	        }
	    }]);

	    return Give;
	}(_react2.default.Component);

	exports.default = Give;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ToolTip = function (_React$Component) {
	    _inherits(ToolTip, _React$Component);

	    function ToolTip(props) {
	        _classCallCheck(this, ToolTip);

	        var _this = _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).call(this, props));

	        _this.remaining = _this.remaining.bind(_this);
	        return _this;
	    }

	    _createClass(ToolTip, [{
	        key: "remaining",
	        value: function remaining() {
	            return this.props.total - this.props.current;
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                { className: "tooltip" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "tooltip-inner" },
	                    "$",
	                    this.remaining(),
	                    " still needed for this project"
	                )
	            );
	        }
	    }]);

	    return ToolTip;
	}(_react2.default.Component);

	exports.default = ToolTip;

/***/ }
/******/ ]);