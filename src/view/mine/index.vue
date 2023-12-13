<template>
  <div class="street-sign">
	  <div class="text-content">
		  
		  <P class="text-center">
			<svg-icon width="500" height="500" icon-class="me"></svg-icon>
		  </P>
		  <P class="text-center bg-text">
			  如何形容我呢！！如果够简洁的话！那就是一个字!
		  </P>
		  <P class="text-center" style="position: relative;">
			  <span class="dog">
				  狗
			  </span>
			  <span class="handsome">
				  帅
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
.dog {
	font-size: 300px;font-weight: bold;color: #FDF1E5;
}
.handsome {
	font-size: 120px;
	    font-weight: bold;
	    color: #f0a354;
	    display: block;
	    width: 100%;
		height: 400px;
		line-height: 490px;
	    position: absolute;
	    left: 0;
	    top: 0;
}
</style>