"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Prefetch=exports.stateToProps=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_context=require("../context"),_connector=_interopRequireDefault(require("../../hoc/connector"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var Prefetch=function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),console.log("prefetch running"),c.prefetch(),c}return _inherits(b,a),_createClass(b,[{key:"prefetch",value:function a(){this.props.refresh({priority:this.props.priority,data:{id:this.props.id,bids:this.bidHandler,type:"prefetch"}})}},{key:"componentDidMount",value:function a(){console.log("component mounted")}},{key:"render",value:function a(){return _react.default.createElement("div",null,"Hello")}},{key:"bidHandler",get:function a(){return this.props.bidHandler({id:this.props.id,sizes:this.props.sizes})}}]),b}(_react.default.Component);exports.Prefetch=Prefetch,Prefetch.defaultProps={id:"",priority:1,refresh:function a(){},bidHandler:function a(){}};var stateToProps=function(a){var b=a.refresh;return{refresh:b}};exports.stateToProps=stateToProps;var _default=(0,_connector.default)(_context.AdsContext,stateToProps)(Prefetch);exports.default=_default;