var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var HelloForm = (function (_super) {
    __extends(HelloForm, _super);
    function HelloForm(props) {
        _super.call(this, props);
    }
    HelloForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("input", {"value": this.props.name, "onChange": function (e) { return _this.props.handleChange(e); }})));
    };
    return HelloForm;
})(React.Component);
exports.__esModule = true;
exports["default"] = HelloForm;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvZm9ybS50c3giXSwibmFtZXMiOlsiSGVsbG9Gb3JtIiwiSGVsbG9Gb3JtLmNvbnN0cnVjdG9yIiwiSGVsbG9Gb3JtLnJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUUvQjtJQUF1Q0EsNkJBQXFDQTtJQUN4RUEsbUJBQVlBLEtBQXNCQTtRQUM5QkMsa0JBQU1BLEtBQUtBLENBQUNBLENBQUNBO0lBQ2pCQSxDQUFDQTtJQUVHRCwwQkFBTUEsR0FBYkE7UUFBQUUsaUJBU0NBO1FBUkFBLE1BQU1BLENBQUNBLENBQ0dBLHFCQUFDQSxHQUFHQSxTQUNBQSxxQkFBQ0EsS0FBS0EsS0FDRkEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBTUEsR0FDekJBLFFBQVFBLEdBQUdBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBLEVBQTFCQSxDQUE0QkEsRUFDOUNBLENBQ0FBLENBQ1RBLENBQUNBO0lBQ1RBLENBQUNBO0lBQ0ZGLGdCQUFDQTtBQUFEQSxDQWZBLEFBZUNBLEVBZnNDLEtBQUssQ0FBQyxTQUFTLEVBZXJEO0FBZkQ7OEJBZUMsQ0FBQSIsImZpbGUiOiJoZWxsb2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUhlbGxvRm9ybVByb3BzLCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJSGVsbG9Gb3JtUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSkgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
