var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var helloform_1 = require('./helloform');
var hellocontent_1 = require('./hellocontent');
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        _super.call(this, props);
        this.state = { name: this.props.defaultName };
        this.handleChange = this.handleChange.bind(this);
    }
    HelloWorld.prototype.handleChange = function (event) {
        this.setState({ name: event.target.value });
    };
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(helloform_1["default"], {"name": this.state.name, "handleChange": this.handleChange}), React.createElement(hellocontent_1["default"], {"name": this.state.name})));
    };
    return HelloWorld;
})(React.Component);
exports.__esModule = true;
exports["default"] = HelloWorld;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvd29ybGQudHN4Il0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJIZWxsb1dvcmxkLmNvbnN0cnVjdG9yIiwiSGVsbG9Xb3JsZC5oYW5kbGVDaGFuZ2UiLCJIZWxsb1dvcmxkLnJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUMvQiwwQkFBc0IsYUFBYSxDQUFDLENBQUE7QUFDcEMsNkJBQXlCLGdCQUFnQixDQUFDLENBQUE7QUFFMUM7SUFBd0NBLDhCQUF5QkE7SUFDN0RBLG9CQUFZQSxLQUFVQTtRQUNsQkMsa0JBQU1BLEtBQUtBLENBQUNBLENBQUNBO1FBQ2JBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQzlDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFBQTtJQUNwREEsQ0FBQ0E7SUFFTUQsaUNBQVlBLEdBQW5CQSxVQUFvQkEsS0FBVUE7UUFFMUJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUVHRiwyQkFBTUEsR0FBYkE7UUFDQ0csTUFBTUEsQ0FBQ0EsQ0FDR0EscUJBQUNBLEdBQUdBLFNBQ0FBLG9CQUFDQSxzQkFBU0EsSUFDTkEsSUFBSUEsR0FBS0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBTUEsR0FDMUJBLFlBQVlBLEdBQUtBLElBQUlBLENBQUNBLFlBQWNBLEVBQ3RDQSxFQUNGQSxvQkFBQ0EseUJBQVlBLElBQ1RBLElBQUlBLEdBQUtBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQU1BLEVBQzVCQSxDQUNBQSxDQUNUQSxDQUFDQTtJQUNUQSxDQUFDQTtJQUNGSCxpQkFBQ0E7QUFBREEsQ0F6QkEsQUF5QkNBLEVBekJ1QyxLQUFLLENBQUMsU0FBUyxFQXlCdEQ7QUF6QkQ7K0JBeUJDLENBQUEiLCJmaWxlIjoiaGVsbG93b3JsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlbGxvRm9ybSBmcm9tICcuL2hlbGxvZm9ybSc7XHJcbmltcG9ydCBIZWxsb0NvbnRlbnQgZnJvbSAnLi9oZWxsb2NvbnRlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG5hbWU6IHRoaXMucHJvcHMuZGVmYXVsdE5hbWUgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGhhbmRsZUNoYW5nZShldmVudDogYW55KSA6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlbGxvRm9ybSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0geyB0aGlzLnN0YXRlLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVsbG9Db250ZW50IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSB7IHRoaXMuc3RhdGUubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
