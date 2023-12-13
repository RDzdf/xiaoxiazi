<template>
	<div class="street-sign">
		<div class="text-content">

			<P>两个人在一起最重要的是什么！</P>

			<P>当当当，当然是能吃到一起了。</P>

			<P>两个吃货在一起的快乐是无敌的！</P>

			<P>俗话不是说，两口子之间的矛盾，没有什么是一顿火锅儿解决不了的。</P>

			<P>如果有，那就两顿。</P>

			<p>
				<button @click="handleClick" style="width: 100%">
					吃火锅儿去<svg-icon icon-class="go"></svg-icon>
				</button>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../../router';
const props = defineProps<{ initialParam: string }>()

const paramValue = ref(props.initialParam)

console.log("paramValue==", paramValue)

const handleClick = () => {
	// 更新参数值
	router.push({ name: 'FoodMap' });
}
</script>
