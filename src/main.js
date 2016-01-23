var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DOM = require('react-dom');
var helloworld_1 = require('helloworld');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sIm5hbWVzIjpbIk1haW4iLCJNYWluLmNvbnN0cnVjdG9yIiwiTWFpbi5yZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsSUFBWSxHQUFHLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFDakMsMkJBQXVCLFlBQVksQ0FBQyxDQUFBO0FBRXBDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFNUM7SUFBbUJBLHdCQUF5QkE7SUFDeENBLGNBQVlBLEtBQVVBO1FBQ2xCQyxrQkFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDakJBLENBQUNBO0lBRUdELHFCQUFNQSxHQUFiQTtRQUNDRSxNQUFNQSxDQUFDQSxDQUNHQSxxQkFBQ0EsR0FBR0EsU0FDRkEsb0JBQUNBLHVCQUFVQSxJQUFDQSxXQUFXQSxHQUFDQSxPQUFPQSxFQUFHQSxDQUM5QkEsQ0FDVEEsQ0FBQ0E7SUFDVEEsQ0FBQ0E7SUFDRkYsV0FBQ0E7QUFBREEsQ0FaQSxBQVlDQSxFQVprQixLQUFLLENBQUMsU0FBUyxFQVlqQztBQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsb0JBQUMsSUFBSSxPQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJ2hlbGxvd29ybGQnO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEhlbGxvV29ybGQgZGVmYXVsdE5hbWU9J1dvcmxkJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cdH1cclxufVxyXG5cclxuRE9NLnJlbmRlcig8TWFpbiAvPiwgcm9vdCk7ICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
