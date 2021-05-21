import { createApp } from "vue";
import { ElTooltip } from "element-plus";
export default function (el, binding) {
  if (el.hasIcon) return;
  const iconElement = structureIcon(binding.arg, binding.value, el);
  el.appendChild(iconElement);
  el.hasIcon = true;
}

function structureIcon(content, attrs, el) {
  // 拼接绑定属性
  let attrStr = "";
  for (let key in attrs) {
    attrStr += `${key}=${attrs[key]} `;
  }
  const a = `<el-tooltip content=${content} ${attrStr}><i class="el-icon-question" style="margin:0 10px"></i></el-tooltip>`;
  // 创建构造器
  //   const tooltip = extend({
  //     template: a,
  //   });
  // 创建一个 tooltip 实例并返回 dom 节点
  const app = createApp({
    template: a,
  });
  //const component = new tooltip().$mount();
  const parent = document.createElement("span");
  el.appendChild(parent);
  const component = app.component(ElTooltip.name, ElTooltip).mount(parent);
  return component.$el;
}
