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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvZm9ybS50c3giXSwibmFtZXMiOlsiSGVsbG9Gb3JtIiwiSGVsbG9Gb3JtLmNvbnN0cnVjdG9yIiwiSGVsbG9Gb3JtLnJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUUvQjtJQUF1Q0EsNkJBQXlCQTtJQUM1REEsbUJBQVlBLEtBQVVBO1FBQ2xCQyxrQkFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDakJBLENBQUNBO0lBRUdELDBCQUFNQSxHQUFiQTtRQUFBRSxpQkFTQ0E7UUFSQUEsTUFBTUEsQ0FBQ0EsQ0FDR0EscUJBQUNBLEdBQUdBLFNBQ0FBLHFCQUFDQSxLQUFLQSxLQUNGQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFNQSxHQUN6QkEsUUFBUUEsR0FBR0EsVUFBQUEsQ0FBQ0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBMUJBLENBQTRCQSxFQUM5Q0EsQ0FDQUEsQ0FDVEEsQ0FBQ0E7SUFDVEEsQ0FBQ0E7SUFDRkYsZ0JBQUNBO0FBQURBLENBZkEsQUFlQ0EsRUFmc0MsS0FBSyxDQUFDLFNBQVMsRUFlckQ7QUFmRDs4QkFlQyxDQUFBIiwiZmlsZSI6ImhlbGxvZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKGUpIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
