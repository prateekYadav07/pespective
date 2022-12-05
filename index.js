const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      anglex: 0,
      angley: 0,
      anglez: 0,
    };
  },
  methods: {
    resetProps() {
      this.perspective = 100;
      this.anglex = 0;
      this.angley = 0;
      this.anglez = 0;
    },

  },
  computed: {
    box() {
      const x = this.anglex + "deg";
      const y = this.angley + "deg";
      const z = this.anglez + "deg";
      return {
        transform: `perspective(${this.perspective}px) 
        rotateX(${this.anglex}deg) 
        rotateY(${this.angley}deg) 
        rotateZ(${this.anglez}deg)`,
      };
    },
  },
}).mount("#app");
