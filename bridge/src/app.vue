<template>
  <div
    class="touch-area"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <transition name="slide-up">
      <div v-if="showPanel" class="panel">
        Slide-up panel activated by swipe.
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      touchStartY: 0,
      touchEndY: 0,
      showPanel: false
    };
  },
  methods: {
    onTouchStart(e: TouchEvent) {
      this.touchStartY = e.touches[0].clientY;
    },
    onTouchEnd(e: TouchEvent) {
      this.touchEndY = e.changedTouches[0].clientY;
      const delta = this.touchStartY - this.touchEndY;
      if (delta > 50) { // swipe up threshold
        this.showPanel = true;
      }
    }
  }
};
</script>

<style>
.touch-area {
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
}

.panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: #333;
  color: white;
  padding: 1rem;
  z-index: 100;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
}
</style>
