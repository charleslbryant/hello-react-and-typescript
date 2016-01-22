var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        _super.call(this, props);
        this.state = { name: this.props.defaultName };
    }
    HelloWorld.prototype.handleOnChange = function (event) {
        this.setState({ name: event.target.value });
    };
    HelloWorld.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("div", null, React.createElement("input", {"onChange": function (e) { return _this.handleOnChange(e); }})), React.createElement("div", null, "Hello ", this.state.name, "!")));
    };
    return HelloWorld;
})(React.Component);
exports.__esModule = true;
exports["default"] = HelloWorld;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvd29ybGQudHN4Il0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJIZWxsb1dvcmxkLmNvbnN0cnVjdG9yIiwiSGVsbG9Xb3JsZC5oYW5kbGVPbkNoYW5nZSIsIkhlbGxvV29ybGQucmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBRS9CO0lBQXdDQSw4QkFBeUJBO0lBQzdEQSxvQkFBWUEsS0FBVUE7UUFDbEJDLGtCQUFNQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNiQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFFTUQsbUNBQWNBLEdBQXJCQSxVQUFzQkEsS0FBVUE7UUFDNUJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUVHRiwyQkFBTUEsR0FBYkE7UUFBQUcsaUJBYUNBO1FBWkFBLE1BQU1BLENBQUNBLENBQ0dBLHFCQUFDQSxHQUFHQSxTQUNBQSxxQkFBQ0EsR0FBR0EsU0FDQUEscUJBQUNBLEtBQUtBLEtBQ0ZBLFFBQVFBLEdBQUdBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBLEVBQXRCQSxDQUF3QkEsRUFDMUNBLENBQ0FBLEVBQ05BLHFCQUFDQSxHQUFHQSxtQkFDUUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBTUEsTUFDdkJBLENBQ0pBLENBQ1RBLENBQUNBO0lBQ1RBLENBQUNBO0lBQ0ZILGlCQUFDQTtBQUFEQSxDQXhCQSxBQXdCQ0EsRUF4QnVDLEtBQUssQ0FBQyxTQUFTLEVBd0J0RDtBQXhCRDsrQkF3QkMsQ0FBQSIsImZpbGUiOiJoZWxsb3dvcmxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG5hbWU6IHRoaXMucHJvcHMuZGVmYXVsdE5hbWUgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGhhbmRsZU9uQ2hhbmdlKGV2ZW50OiBhbnkpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlT25DaGFuZ2UoZSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgSGVsbG8geyB0aGlzLnN0YXRlLm5hbWUgfSFcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
