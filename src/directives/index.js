import expandClick from "./expandClick";
import copy from "./copy";
import screenfull from "./screenfull";
import tooltip from "./tooltip";
import ellipsis from "./ellipsis";
import backtop from "./backtop";
import empty from "./empty";
import drag from "./drag";
import format from "./format";

export default {
  install(app) {
    app.directive("expandClick", {
      mounted: expandClick,
    });
    app.directive("focus", {
      mounted(el) {
        el.focus();
      },
    });
    app.directive("copy", copy);
    app.directive("screenfull", screenfull);
    app.directive("tooltip", {
      mounted: tooltip,
    });
    app.directive("ellipsis", {
      mounted: ellipsis,
    });
    app.directive("backtop", backtop);
    app.directive("empty", empty);
    app.directive("drag", drag);
    app.directive("format", format);
  },
};
