'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _canvasGauges = require('canvas-gauges');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactRadialGauge(props) {
    var el = void 0;

    (0, _react.useEffect)(function () {
        var options = _extends({}, props, {
            renderTo: el
        });

        var gauge = new _canvasGauges.RadialGauge(options).draw();
        gauge.value = props.value;
        gauge.update(options);
    });

    return _react2.default.createElement('canvas', { ref: function ref(canvas) {
            el = canvas;
        } });
}

exports.default = ReactRadialGauge;