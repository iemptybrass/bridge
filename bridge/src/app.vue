<template>
  <div
    class="panel"
    :style="{ transform: `translateY(${translateY}px)` }"
    @touchstart="onStart"
    @touchmove="onMove"
    @touchend="onEnd">

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const startY = ref(0);
const currentY = ref(0);
const startTime = ref(0);
const translateY = ref(100); // initial offset (closed)

function onStart(e: TouchEvent) {
  startY.value = e.touches[0].clientY;
  currentY.value = startY.value;
  startTime.value = Date.now();
}

function onMove(e: TouchEvent) {
  currentY.value = e.touches[0].clientY;
  const delta = currentY.value - startY.value;
  translateY.value = Math.max(0, translateY.value + delta);
  startY.value = currentY.value;
}

function onEnd() {
  const velocity = (startY.value - currentY.value) / (Date.now() - startTime.value);
  if (velocity < -0.5 || translateY.value > 150) {
    translateY.value = 300; // snap closed
  } else if (velocity > 0.5 || translateY.value < 150) {
    translateY.value = 0; // snap open
  } else {
    translateY.value = 100; // settle midway
  }
}
</script>

<style scoped>
.panel {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: white;
  transition: transform 0.3s ease;
  touch-action: none;
}
</style>
