import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp( {
  data() {
    return {
      result: 0,
      first: 0,
      last: 0,
      method: 'sum',
    }
  },

  computed: {
    computedResult() {
      const method = this.method;

      if ( method === 'sum' ) {
        this.result = this.first + this.last;
      } else if ( method === 'subtract' ) {
        this.result = this.first - this.last;
      } else if ( method === 'multiply' ) {
        this.result = this.first * this.last;
      } else if ( method === 'divide' ) {
        this.result = this.first / this.last;
      }

      return this.result;
    }
  },
} );

const vm = app.mount( '#app' );
