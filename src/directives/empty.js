import { createApp } from "vue";

export default {
  mounted(el, binding, vnode) {
    el.style.position = el.style.position || "relative";
    const { offsetHeight, offsetWidth } = el;
    const { visible, content, img } = binding.value;
    const image = img ? `<img src="${img}" />` : "";
    const defaultStyle =
      "position:absolute;top:0;left:0;z-index:9999;background:#fff;display:flex;justify-content: center;align-items: center;";
    const empty = createApp({
      template: `<div style="height:${offsetHeight}px;width:${offsetWidth}px;${defaultStyle}">
        <div style="text-align:center;">
          ${image}
          <div>${content || "暂无数据"}</div>
        </div>
      </div>`,
    });
    const parent = document.createElement("div");
    document.body.appendChild(parent);
    const component = empty.mount(parent).$el;
    if (visible) {
      el.appendChild(component);
    } else {
      el.removeChild(el.lastChild);
    }
  },
};
