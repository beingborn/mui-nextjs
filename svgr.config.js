module.exports = {
  expandProps: 'start',
  svgProps: {
    width: '{props.width || "16px"}',
    height: '{props.width || "16px"}',
    fill: '{props.fill || "currentColor"}',
    stroke: '{props.stroke || "currentColor"}',
    preserveAspectRatio: 'xMidYMid meet',  // 중앙기준 Sclae
  },
  replaceAttrValues: {
    // 6진수 3진수 => currentColor로 초기화
    "/#[0-9A-F]{6}/g": "currentColor",
    "/#[0-9A-F]{3}/g": "currentColor"
  },
};