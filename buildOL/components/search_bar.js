'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*  BElOW IS A FUNCTIONAL COMPONENT // Functional components do not have Built in States
const SearchBar = () => {
return <input/>
}
*/

/*BELOW IS A CLASS BASED component more powerful, changes, self aware of information*/
var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.state = { term: '' };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // return <input onChange={this.onInputChange} />;
      return _react2.default.createElement(
        'div',
        { className: 'search-bar' },
        _react2.default.createElement('input', {
          value: this.state.term,
          onChange: function onChange(event) {
            return _this2.onInputChange(event.target.value);
          } })
      );
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(term) {

      this.setState({ term: this.props.onSearchTermChange(term) });
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;