import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp( {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    countBtn() {
      return this.counter ++;
    }
  }
} );
const vm = app.mount( '#app' );
