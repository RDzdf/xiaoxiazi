<script setup lang="ts">
import { computed } from "vue";
 
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  iconColor: {
    type: String,
    default: "CurrentColor",
  },
  height: {
    type: Number,
    default: 54,
  },
  width: {
    type: Number,
    default: 70,
  },
});
const iconName = computed(() => `#icon-${props.iconClass}`);
const svgClass = computed(() => {
  if (props.className) {
    return "svg-icon " + props.className;
  } else {
    return "svg-icon";
  }
});

</script>
<template>
	<!-- {{svgClass}} -->
	<!--  :viewBox="`0,0,${width},${height}`" -->
  <svg :class="svgClass" aria-hidden="true" :fill="iconColor" :style="{width: width + 'px',height: height + 'px',}">
    <use :xlink:href="iconName" />
  </svg>
</template>
 
<style scoped>
.svg-icon {
  /* // svg 图标默认宽高，根据个人使用情况自行调整 */
  width: 70px;
  height: 54px;
  fill: currentColor;
  overflow: hidden;
}
.svg-view {
	overflow: hidden;
	width: 100%;
	height: 100%;
}
</style>