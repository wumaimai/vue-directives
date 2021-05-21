import expandClick from "./expandClick";
import copy from "./copy";
import screenfull from "./screenfull";
import tooltip from "./tooltip";
import ellipsis from "./ellipsis";

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
  },
};
