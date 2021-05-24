export default {
  mounted(el, binding, vnode) {
    let _el = el;
    document.onselectstart = function () {
      return false; //禁止选择网页上的文字
    };

    _el.onmousedown = (e) => {
      let disX = e.clientX - _el.offsetLeft; //鼠标按下，计算当前元素距离可视区的距离
      let disY = e.clientY - _el.offsetTop;
      document.onmousemove = function (e) {
        let l = e.clientX - disX;
        let t = e.clientY - disY;
        _el.style.left = l + "px";
        _el.style.top = t + "px";
      };
      document.onmouseup = (e) => {
        document.onmousemove = document.onmouseup = null;
      };
      return false;
    };
  },
};
