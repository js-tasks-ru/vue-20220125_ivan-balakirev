<template>
  <div v-if="isVisible" class="toast" :class="itemClass">
    <ui-icon v-if="itemIcon" class="toast__icon" :icon="itemIcon" />
    <span>{{ message }}</span>
  </div>
</template>

<script>
import UiIcon from "./UiIcon";

export default {
  name: "UiToast",
  components: {
    UiIcon,
  },
  props: {
    type: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  emits: ['remove'],
  data() {
    return {
      isVisible: true,
      timeOut: 5000,
    };
  },
  computed: {
    itemClass() {
      return ( this.type === 'error' ) ? 'toast_error' : 'toast_success';
    },
    itemIcon() {
      return ( this.type === 'error' ) ? 'alert-circle' : 'check-circle';
    },
  },
  created() {
    this.isVisible = true;
    setTimeout( () => {
      this.isVisible = false;
      this.$emit( 'remove', true );
    }, this.timeOut );
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
