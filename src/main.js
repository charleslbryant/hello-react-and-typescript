var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DOM = require('react-dom');
var root = document.getElementById('app');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        _super.call(this, props);
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null, "Hello World"));
    };
    return Main;
})(React.Component);
DOM.render(React.createElement(Main, null), root);
