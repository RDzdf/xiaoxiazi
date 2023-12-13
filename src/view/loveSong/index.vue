<template>
	<div class="street-sign">
		<div class="text-content">

			<P>如果有一天</P>

			<P>遇到喜欢的人</P>

			<P>别告白</P>

			<P>别嚷嚷</P>

			<P>悄悄地对她好</P>

			<P>别刻意</P>

			<P>别浮夸</P>

			<P>不能让她看出来</P>

			<P>如果</P>

			<P>我是说如果</P>

			<P>如果她没有喜欢上你</P>

			<P>那就和她做朋友</P>

			<P>如果</P>

			<P>如果有一天</P>

			<P>她开始和你说她的秘密</P>

			<P>要记得吻她</P>

			<P>余生不要再去爱别人</P>

			<P>只爱她</P>

			<p>
				<button @click="handleClick" style="width: 100%">
					受得了点击继续<svg-icon icon-class="go"></svg-icon>
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
	router.push({ name: 'SongMap' });
}
</script>
