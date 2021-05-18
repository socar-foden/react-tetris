var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Block = /** @class */ (function () {
    function Block() {
    }
    Object.defineProperty(Block.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    return Block;
}());
export { Block };
var Block_I = /** @class */ (function (_super) {
    __extends(Block_I, _super);
    function Block_I() {
        var _this = _super.call(this) || this;
        _this._type = 0 /* I */;
        _this._position = [[1], [1], [1], [1]];
        _this._color = "rgb(2, 71, 94)";
        return _this;
    }
    return Block_I;
}(Block));
export { Block_I };
var Block_O = /** @class */ (function (_super) {
    __extends(Block_O, _super);
    function Block_O() {
        var _this = _super.call(this) || this;
        _this._type = 1 /* O */;
        _this._position = [
            [1, 1],
            [1, 1],
        ];
        _this._color = "rgb(104, 121, 128)";
        return _this;
    }
    return Block_O;
}(Block));
export { Block_O };
var Block_Z = /** @class */ (function (_super) {
    __extends(Block_Z, _super);
    function Block_Z() {
        var _this = _super.call(this) || this;
        _this._type = 2 /* Z */;
        _this._position = [
            [1, 1, 0],
            [0, 1, 1],
        ];
        _this._color = "rgb(249, 177, 8)";
        return _this;
    }
    return Block_Z;
}(Block));
export { Block_Z };
var Block_S = /** @class */ (function (_super) {
    __extends(Block_S, _super);
    function Block_S() {
        var _this = _super.call(this) || this;
        _this._type = 3 /* S */;
        _this._position = [
            [0, 1, 1],
            [1, 1, 0],
        ];
        _this._color = "rgb(245, 91, 71)";
        return _this;
    }
    return Block_S;
}(Block));
export { Block_S };
var Block_J = /** @class */ (function (_super) {
    __extends(Block_J, _super);
    function Block_J() {
        var _this = _super.call(this) || this;
        _this._type = 4 /* J */;
        _this._position = [
            [0, 1],
            [0, 1],
            [1, 1],
        ];
        _this._color = "rgb(159, 230, 160)";
        return _this;
    }
    return Block_J;
}(Block));
export { Block_J };
var Block_L = /** @class */ (function (_super) {
    __extends(Block_L, _super);
    function Block_L() {
        var _this = _super.call(this) || this;
        _this._type = 5 /* L */;
        _this._position = [
            [1, 0],
            [1, 0],
            [1, 1],
        ];
        _this._color = "rgb(86, 74, 74)";
        return _this;
    }
    return Block_L;
}(Block));
export { Block_L };
var Block_T = /** @class */ (function (_super) {
    __extends(Block_T, _super);
    function Block_T() {
        var _this = _super.call(this) || this;
        _this._type = 6 /* T */;
        _this._position = [
            [1, 1, 1],
            [0, 1, 0],
        ];
        _this._color = "rgb(81, 18, 129)";
        return _this;
    }
    return Block_T;
}(Block));
export { Block_T };
var Block_Shadow = /** @class */ (function (_super) {
    __extends(Block_Shadow, _super);
    function Block_Shadow(block) {
        var _this = _super.call(this) || this;
        _this._type = block.type;
        _this._position = block._position;
        _this._color = block.color.split(')')[0] + ", 0.4)";
        return _this;
    }
    return Block_Shadow;
}(Block));
export { Block_Shadow };
//# sourceMappingURL=blocks.js.map