<template>
  <div class="toasts">
    <div v-if="isShown">
      <ui-toast
        v-for="toast in toasts"
        :key="toast"
        :class="toast.class"
        :icon="toast.icon"
        :message="toast.message"
        :id="toast.id"
        @removeToast="removeToast"
      />
    </div>

  </div>
</template>

<script>
import UiIcon from './UiIcon';
import UiToast from "./UiToast";

export default {
  name: 'TheToaster',
  components: {
    UiToast,
    UiIcon,
  },
  data() {
    return {
      isShown: false,
      toastClass: '',
      toastIcon: '',
      toastMessage: '',
      toasts: [],
      id: 0,
    }
  },
  methods: {
    error( message ) {
      this.isShown = true;

      this.toasts.push( {
        message: message,
        icon: 'alert-circle',
        class: 'toast_error',
        id: this.id ++,
      } );
    },
    success( message ) {
      this.isShown = true;
      this.toasts.push( {
        message: message,
        icon: 'check-circle',
        class: 'toast_success',
        id: this.id ++,
      } );
    },
    removeToast( id ) {
      const toasts = this.toasts.filter(function( value ){
        return value.id !== id;
      });
      this.toasts = toasts;
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
