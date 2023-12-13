<template>
  <div class="street-sign">
	  <div class="text-content">
		  <P class="text-center">
			<svg-icon width="300" height="300" icon-class="avatar"></svg-icon>
		  </P>
		  <!-- <P class="text-center bg-text">
			  如何形容她呢！
		  </P> -->
		  <P class="text-center" style="position: relative;">
			  <span class="cute">
				  性感
			  </span>
			  <span class="verycute">
				  可爱
			  </span>
		  </P>
		  <P class="text-center" style="position: relative;">
			  <span class="cute">
				  美丽
			  </span>
			  <span class="verycute">
				  大方
			  </span>
		  </P>
		  <P class="text-center" style="position: relative;">
			  <span class="cute">
				  冰雪
			  </span>
			  <span class="verycute">
				  聪明
			  </span>
		  </P>
		  <P class="text-center" style="position: relative;">
			  <span class="cute">
				  天生
			  </span>
			  <span class="verycute">
				  丽质
			  </span>
		  </P>
		  <P class="text-center" style="position: relative;">
			  <span class="cute">
				  暖心
			  </span>
			  <span class="verycute">
				  体贴
			  </span>
		  </P>
	  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ initialParam: string }>()

const paramValue = ref(props.initialParam)

console.log("paramValue==", paramValue)

const handleClick = () => {
  // 更新参数值
  paramValue.value = '新的参数值'
}
</script>

<style scoped>
.street-sign {
  /* 样式定义 */
}
.bg-text {
	text-align: center;
	padding: 0;
	line-height: 40px;
	background-color: #f9f9f9;
	border-radius: 10px;
}
.cute {
	font-size: 200px;font-weight: bold;color: #FDF1E5;
}
.verycute {
	font-size: 120px;
	    font-weight: bold;
	    color: #f0a354;
	    display: block;
	    width: 100%;
		height: 200px;
		line-height: 310px;
	    position: absolute;
	    left: 0;
	    top: 0;
}
</style>