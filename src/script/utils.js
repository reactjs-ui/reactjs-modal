/**
 * 该文件中的方法最终会独立出去
 **/

export function checkBodyScrollbar() {
  let fullWindowWidth = window.innerWidth;
  if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
    const documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }
  return document.body.clientWidth < fullWindowWidth;
}

//计算滚动条的宽度
const scrollbarMeasureStyle = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

export function getScrollbarWidth() {
  let scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasureStyle).forEach((item) => {
    scrollDiv.style[item] = scrollbarMeasureStyle[item];
  });
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
