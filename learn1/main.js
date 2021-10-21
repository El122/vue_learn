const app1 = new Vue({
    el: "#app1",
    data: {
        message: "BUP"
    },
    methods: {
        setMessage: function(e) {
            this.message = e.target.value
        }
    }
});

const app2 = new Vue({
  el: "#app2",
  data: {
    link: "https://vk.com/ielliena",
    message: "BUP",
    htmlText: "<h3>Hello, World!</h3>"
  },
  methods: {
    setMessage: function (e) {
      this.message = e.target.value;
    },
  },
});

const app3 = new Vue({
  el: "#app3",
  data: {
      name: "Mikk",
      surname: "Arya"
  },
  computed: {
      fullName: {
          get: function() {
            return this.name + " " + this.surname
          },
          set: function(newValue) {
              let val = newValue.split(" ");
              this.name = val[0];
              this.surname = val[1];
          }
      }
  }
});

const app4 = new Vue({
  el: "#app4",
  data: {
    isActive: false
  },
});

const app5 = new Vue({
  el: "#app5",
  data: {
      number: 0,
      res: 0
  },
  watch: {
      number: function(num) {
        if(num >= 0) this.res = num
        else this.reverseNum(num)
      }
  },
  methods: {
      reverseNum: function(num) {
          this.res = -num;
      }
  }
});

const app6 = new Vue({
  el: "#app6",
  methods: {
    getTime: function (num) {
      this.$refs.time.innerText = (new Date()).toTimeString();
    },
  },
});