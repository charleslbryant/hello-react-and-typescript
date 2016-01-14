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
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null, "Hello World!"));
    };
    return HelloWorld;
})(React.Component);
exports.__esModule = true;
exports["default"] = HelloWorld;
