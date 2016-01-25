var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DOM = require('react-dom');
var helloworld_1 = require('./helloworld');
var root = document.getElementById('app');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        _super.call(this, props);
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(helloworld_1["default"], {"defaultName": 'World'})));
    };
    return Main;
})(React.Component);
DOM.render(React.createElement(Main, null), root);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sIm5hbWVzIjpbIk1haW4iLCJNYWluLmNvbnN0cnVjdG9yIiwiTWFpbi5yZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsSUFBWSxHQUFHLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFDakMsMkJBQXVCLGNBQWMsQ0FBQyxDQUFBO0FBRXRDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFNUM7SUFBbUJBLHdCQUF5QkE7SUFDeENBLGNBQVlBLEtBQVVBO1FBQ2xCQyxrQkFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDakJBLENBQUNBO0lBRUdELHFCQUFNQSxHQUFiQTtRQUNDRSxNQUFNQSxDQUFDQSxDQUNHQSxxQkFBQ0EsR0FBR0EsU0FDRkEsb0JBQUNBLHVCQUFVQSxJQUFDQSxXQUFXQSxHQUFDQSxPQUFPQSxFQUFHQSxDQUM5QkEsQ0FDVEEsQ0FBQ0E7SUFDVEEsQ0FBQ0E7SUFDRkYsV0FBQ0E7QUFBREEsQ0FaQSxBQVlDQSxFQVprQixLQUFLLENBQUMsU0FBUyxFQVlqQztBQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsb0JBQUMsSUFBSSxPQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vaGVsbG93b3JsZCc7XHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cclxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SGVsbG9Xb3JsZCBkZWZhdWx0TmFtZT0nV29ybGQnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblx0fVxyXG59XHJcblxyXG5ET00ucmVuZGVyKDxNYWluIC8+LCByb290KTsgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
