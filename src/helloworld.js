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
    HelloWorld.prototype.handleOnClick = function (event) {
        this.setState({ name: "CharlesL" });
    };
    HelloWorld.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, "Hello ", this.state.name, "!", React.createElement("button", {"name": "Update", "onClick": function (e) { return _this.handleOnClick(e); }}, "Update")));
    };
    return HelloWorld;
})(React.Component);
exports.__esModule = true;
exports["default"] = HelloWorld;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvd29ybGQudHN4Il0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJIZWxsb1dvcmxkLmNvbnN0cnVjdG9yIiwiSGVsbG9Xb3JsZC5oYW5kbGVPbkNsaWNrIiwiSGVsbG9Xb3JsZC5yZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFFL0I7SUFBd0NBLDhCQUF5QkE7SUFDN0RBLG9CQUFZQSxLQUFVQTtRQUNsQkMsa0JBQU1BLEtBQUtBLENBQUNBLENBQUNBO1FBQ2JBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUVNRCxrQ0FBYUEsR0FBcEJBLFVBQXFCQSxLQUFVQTtRQUMzQkUsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBRUdGLDJCQUFNQSxHQUFiQTtRQUFBRyxpQkFVQ0E7UUFUQUEsTUFBTUEsQ0FBQ0EsQ0FDR0EscUJBQUNBLEdBQUdBLG1CQUNRQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFNQSxPQUN6QkEscUJBQUNBLE1BQU1BLEtBQ0hBLElBQUlBLEdBQUdBLFFBQVFBLEdBQ2ZBLE9BQU9BLEdBQUtBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLEVBQXJCQSxDQUF1QkEsWUFDNUJBLENBQ2RBLENBQ1RBLENBQUNBO0lBQ1RBLENBQUNBO0lBQ0ZILGlCQUFDQTtBQUFEQSxDQXJCQSxBQXFCQ0EsRUFyQnVDLEtBQUssQ0FBQyxTQUFTLEVBcUJ0RDtBQXJCRDsrQkFxQkMsQ0FBQSIsImZpbGUiOiJoZWxsb3dvcmxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG5hbWU6IHRoaXMucHJvcHMuZGVmYXVsdE5hbWUgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGhhbmRsZU9uQ2xpY2soZXZlbnQ6IGFueSkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogXCJDaGFybGVzTFwiIH0pO1xyXG4gICAgfVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEhlbGxvIHsgdGhpcy5zdGF0ZS5uYW1lIH0hXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIlVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsgZSA9PiB0aGlzLmhhbmRsZU9uQ2xpY2soZSkgfVxyXG4gICAgICAgICAgICAgICAgPlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
