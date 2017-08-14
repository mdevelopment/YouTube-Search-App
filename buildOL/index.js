'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _youtubeApiSearch = require('youtube-api-search');

var _youtubeApiSearch2 = _interopRequireDefault(_youtubeApiSearch);

var _search_bar = require('./components/search_bar');

var _search_bar2 = _interopRequireDefault(_search_bar);

var _video_list = require('./components/video_list');

var _video_list2 = _interopRequireDefault(_video_list);

var _video_detail = require('./components/video_detail');

var _video_detail2 = _interopRequireDefault(_video_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API_KEY = 'AIzaSyD5qktzX4ImWWRbzSO7_vrOZrtAwe8Ku6M';

//Create a new component (Vide) and this should produce some
//HTML
//FUNCTION BASED Component
/*
const App = () => {
return ( <div><SearchBar/></div>) ;
}*/

var App = function (_Component) {
  _inherits(App, _Component);

  //CONTRUCTOR
  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videos: [],
      selectedVideo: null
    };
    _this.videoSearch("Richard Nixon");

    return _this;
  }
  //END CONTSTRUCTOR

  _createClass(App, [{
    key: 'videoSearch',
    value: function videoSearch(term) {
      var _this2 = this;

      //YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      (0, _youtubeApiSearch2.default)({ key: API_KEY, term: term }, function (videos) {
        console.log(videos);
        // this.setState({videos:data})
        //Note speacial syntax below of 'videos'  not videos:videos, long form,  This is ES6
        //Used when the key and state name are the same name
        //this.setState({videos})
        //***************************************************
        _this2.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
        console.log("WHAT IS THE FIRST VIDEO:" + _this2.state.selectedVideo);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var videoSearch = _lodash2.default.debounce(function (term) {
        _this3.videoSearch(term);
      }, 500);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_search_bar2.default, { onSearchTermChange: videoSearch }),
        _react2.default.createElement(_video_detail2.default, { video: this.state.selectedVideo }),
        _react2.default.createElement(_video_list2.default, { className: 'myVideoList', onVideoSelect: function onVideoSelect(selectedVideo) {
            return _this3.setState({ selectedVideo: selectedVideo });
          },
          videos: this.state.videos })
      );
    }
  }]);

  return App;
}(_react.Component);

//Take this component's generated HTML and put it on the page


_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('container')
//  document.querySelector('container')
);