import Vue from "vue";

Vue.directive("custom-model", {
  bind(el, binding, vnode) {
    const inputHandler = (event) =>
      (vnode.context.$data[binding.expression] = event.target.value);
    el.addEventListener("input", inputHandler);
  },
});
