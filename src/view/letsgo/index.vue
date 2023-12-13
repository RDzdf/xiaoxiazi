<template>
	<div class="street-sign">
		<div class="text-content">

			<P>时间当然是如白驹过隙一般歘(chuā)的一声儿，就过去了！</P>

			<P>你甚至都不确定那是白驹还是一只白猫子，网友一致认为是白猫子更快，对此我颇为赞同。</P>

			<P>当我谋划这份礼物的时候，免不了得细细回想又细细回想。回想起来我们在一起竟然七年多了，认识已经八年多了。</P>

			<P>如果换算成天数，就是三千天了！要是换算成小时的话！——我的天，oh my
				god，俺的玉皇大帝王母娘娘啊！要是换算成小时的话就是70000+个小时，七万个小时诶！不敢再往后面换算了，换成分钟秒钟的话，我怕我不认识这么大的数，暴露我是文盲。</P>

			<P>如今想想我们的初次见面：</P>

			<P>我对你的印象：“长得还挺不错嘛，比照片好看的啊！很可爱的呢！可惜有点高冷啊！”</P>

			<P>而我猜测你对我的印象：“小心点儿他，提防着他，别和他靠太近，他不是好人……”</P>

			<P>再然后……</P>

			<p>
				<button @click="handleClick" style="width: 100%">
					<svg-icon icon-class="go"></svg-icon>
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
	router.push({ name: 'LoveMap' });
}
</script>

<style scoped>
.street-sign {
	/* 样式定义 */
}
</style>