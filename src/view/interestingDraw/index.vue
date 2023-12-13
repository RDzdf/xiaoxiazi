<template>
	<div class="street-sign">
		<div class="text-content">

			<P style="text-align: center;">老子没男朋友要你管</P>
			<p style="text-align: center;">
				<img :src="startImg" width="350" alt="">
			</p>
			<p>
				<button @click="handleClick" style="width: 100%">
					<svg-icon icon-class="go"></svg-icon>
				</button>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import startImg from '@/assets/image/draw/1.jpeg'
import { ref } from 'vue'
import router from '../../router';
const props = defineProps<{ initialParam: string }>()

const paramValue = ref(props.initialParam)

console.log("paramValue==", paramValue)

const handleClick = () => {
	// 更新参数值
	router.push({ name: 'DrawMap' });
}
</script>

<style scoped>
.street-sign {
	/* 样式定义 */
}
</style>