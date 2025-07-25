<template>
  <div class="marquee-section">
    <ScrollingText
      :text-list="textList"
    />
  </div>
</template>

<script setup>
import ScrollingText from './ScrollingText.vue'

const props = defineProps({
  textList: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.marquee-section {
  width: 100%;
  position: relative;
  background: transparent;
}
</style>
