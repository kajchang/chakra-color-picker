import { useBoolean, Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, SimpleGrid } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["onChange", "colors", "defaultColor", "color", "pickerBg", "placement", "isDisabled"];
var defaultColors = ["gray.500", "red.500", "orange.500", "yellow.500", "green.500", "teal.500", "blue.500", "cyan.500", "purple.500", "pink.500"];
var ColorPicker = function ColorPicker(_ref) {
  var onChange = _ref.onChange,
      colors = _ref.colors,
      defaultColor = _ref.defaultColor,
      color = _ref.color,
      pickerBg = _ref.pickerBg,
      placement = _ref.placement,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useBoolean = useBoolean(),
      isOpen = _useBoolean[0],
      setIsOpen = _useBoolean[1];

  var colorPalette = colors || defaultColors;

  var _useState = useState(defaultColor || colorPalette[0]),
      selectedColor = _useState[0],
      setSelectedColor = _useState[1];

  useEffect(function () {
    if (color) {
      setSelectedColor(color);
    }
  }, [color]);
  return React.createElement(Popover, {
    isOpen: isOpen && !isDisabled,
    onClose: setIsOpen.toggle,
    placement: placement
  }, React.createElement(PopoverTrigger, null, React.createElement(Button, Object.assign({
    bg: selectedColor,
    onClick: setIsOpen.toggle,
    _hover: {
      bg: selectedColor,
      transform: "scale(1.05)"
    },
    _active: {
      bg: selectedColor
    },
    "aria-label": "color picker",
    isDisabled: isDisabled
  }, props))), React.createElement(PopoverContent, {
    w: "auto",
    bg: pickerBg,
    boxShadow: "md"
  }, React.createElement(PopoverArrow, null), React.createElement(SimpleGrid, {
    columns: 5,
    p: 1,
    spacing: 1
  }, colorPalette.map(function (color, index) {
    return React.createElement(Button, {
      key: "color-picker-" + color + "-" + index,
      h: "40px",
      w: "40px",
      p: 0,
      minW: "40px",
      bg: color,
      _hover: {
        bg: color,
        transform: "scale(1.05)"
      },
      _active: {
        bg: color
      },
      onClick: function onClick() {
        setIsOpen.toggle();
        setSelectedColor(color);
        onChange(color);
      }
    });
  }))));
};

export { ColorPicker };
//# sourceMappingURL=chakra-color-picker.esm.js.map
