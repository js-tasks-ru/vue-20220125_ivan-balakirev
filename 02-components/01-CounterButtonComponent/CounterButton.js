import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent( {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: {
    'update:count': null,
  },
  methods: {
    update( value ) {
      this.$emit( 'update:count', value );
    },
    increment( value ) {
      return ++ value;
    }
  },

  template: `
    <button @click="$emit('update:count', increment(count))" type="button">{{ count }}</button>`,
} );
