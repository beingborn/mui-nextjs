module.exports = {
  icon: true,
  endProps: 'start',
  svgProps: {
    width: '{props.width || "1em"}',
    height: '{props.height || "1em"}',
    fill: '{props.color || "currentColor"}',
    stroke: '{props.strokeColor || "currentColor"}',
    preserveAspectRatio: 'xMidYMid meet',  // 중앙기준 Sclae
  },
  replaceAttrValues: {
    '#000': 'currentColor', // 검정색 고정값을 currentColor로 대체
    '#000000': 'currentColor',
  },
};