<template>
	<!-- Birthday Card -->
	<div class="love-card">
		<div class="card-content">
			<div class="image-box"></div>
			<P class="days">
				<span></span>{{countdownText}}
			</P>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	import {computed} from "vue";
	
	const countdown = ref<number>(0);
	let daysCount = ref<number>(0);
	
	const countdownTime = () => {
		const nowTime = new Date()
		const year = nowTime.getFullYear()
			console.log(`year===${year}`)
		const mineTime = new Date(year, 11, 13);
		if (nowTime > mineTime) {
			daysCount = nowTime - mineTime;
			// console.log(`+${daysCount}`)
			let days = Math.floor(daysCount / (1000 * 60 * 60 * 24))
			if (days > 0) {
				countdown.value = (365-days)
			} else {
				countdown.value = 0
			}
		} else {
			daysCount = mineTime - nowTime;
			// console.log(`-${daysCount}`)
			let days = Math.floor(daysCount / (1000 * 60 * 60 * 24))+1
			countdown.value = days
		}
	}
	countdownTime();
	
	const countdownText = computed(() => {
		return countdown.value == 0 ? "生日快乐" : `倒计时：${countdown.value} 天`;
	})
</script>
<style scoped>
	.image-box {
		background-image: url("@/assets/image/birthdayGirl.png");;
	}
</style>