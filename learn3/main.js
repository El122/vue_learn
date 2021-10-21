Vue.component("Bup", {
  data: function() { return { bupp: "BUP" }; },
  template: "<h1>{{bupp}}</h1>"
})

const inputMessage = {
  props: {message: {
    type: Number,
    required: true,
    default: 0,
    validator: (val) => val > 12
  }, plus: String},
  // props: ["message", "plus"],
  template: "<h3>{{message}} + {{plus}}</h3>",
};

new Vue({
  el: "#app",
  data: {
    inpData: 22,
    inpData2: "34",
  },
  components: {
    localcomponent: { template: "<p>BUP too</p>" },
    "input-message": inputMessage,
  },
});