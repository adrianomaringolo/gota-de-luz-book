"use strict";
exports.__esModule = true;
exports.cn = void 0;
var clsx_1 = require("clsx");
var tailwind_merge_1 = require("tailwind-merge");
exports.cn = function () {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return tailwind_merge_1.twMerge(clsx_1["default"](inputs));
};
