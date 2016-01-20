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
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null, "Hello ", this.state.name, "!"));
    };
    return HelloWorld;
})(React.Component);
exports.__esModule = true;
exports["default"] = HelloWorld;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvd29ybGQudHN4Il0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJIZWxsb1dvcmxkLmNvbnN0cnVjdG9yIiwiSGVsbG9Xb3JsZC5yZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFFL0I7SUFBd0NBLDhCQUF5QkE7SUFDN0RBLG9CQUFZQSxLQUFVQTtRQUNsQkMsa0JBQU1BLEtBQUtBLENBQUNBLENBQUNBO1FBQ2JBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUVHRCwyQkFBTUEsR0FBYkE7UUFDQ0UsTUFBTUEsQ0FBQ0EsQ0FDR0EscUJBQUNBLEdBQUdBLG1CQUNRQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFNQSxNQUN2QkEsQ0FDVEEsQ0FBQ0E7SUFDVEEsQ0FBQ0E7SUFDRkYsaUJBQUNBO0FBQURBLENBYkEsQUFhQ0EsRUFidUMsS0FBSyxDQUFDLFNBQVMsRUFhdEQ7QUFiRDsrQkFhQyxDQUFBIiwiZmlsZSI6ImhlbGxvd29ybGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbmFtZTogdGhpcy5wcm9wcy5kZWZhdWx0TmFtZSB9O1xyXG4gICAgfVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEhlbGxvIHsgdGhpcy5zdGF0ZS5uYW1lIH0hXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
