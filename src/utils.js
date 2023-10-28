export const getNumberOfLines = (ele) => {
  if (!ele) {
    return null;
  }
  const style = window.getComputedStyle(ele);
  const lineHeight = parseFloat(style.lineHeight);
  const elementHeight = ele.clientHeight;
  return Math.floor(elementHeight / lineHeight);
};

export const mockLines = [
  89, 79, 88, 73, 82, 75, 70, 89, 79, 88, 73, 82, 75, 70, 89, 79, 88, 73, 82,
  75, 73, 82, 75, 70, 89, 79, 88, 73, 82, 75, 70, 89, 79, 88, 73, 82, 75, 70,
];
