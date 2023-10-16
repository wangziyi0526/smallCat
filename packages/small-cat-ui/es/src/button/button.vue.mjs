import { defineComponent as e, computed as r, openBlock as u, createElementBlock as c, normalizeClass as l, unref as p, renderSlot as a } from "vue";
import "./style/index.css";
const m = e({ name: "sc-button" }), d = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = r(() => ({ [`sc-button--${t.type}`]: t.type }));
    return (s, f) => (u(), c("button", {
      class: l(["sc-button", p(n)])
    }, [
      a(s.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
