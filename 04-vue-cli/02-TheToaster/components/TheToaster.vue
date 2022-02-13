<template>
  <div class="toasts">
    <div>
      <ui-toast
        v-for="toast in toasts"
        :key="toast"
        :type="toast.type"
        :message="toast.message"
        @remove="remove"
      />
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
import UiToast from './UiToast';

export default {
  name: 'TheToaster',
  components: {
    UiToast,
    UiIcon,
  },
  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    error( message ) {
      this.toasts.push( {
        type: 'error',
        message: message,
      } );
    },
    success( message ) {
      this.toasts.push( {
        type: 'success',
        message: message,
      } );
    },
    remove() {
      if ( this.toasts.length ) {
        this.toasts.splice( 0, 1 );
      }
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
