<template>
	<!-- Wedding Anniversary Card -->
	<div class="love-card">
		<div class="card-content">
			<div class="image-box"></div>
			<P class="days">
				<span>{{countdownText}}</span>
			</P>
		</div>
		<!-- <p>
			{{years}} 年 {{days}}
		</p> -->
	</div>
</template>
<script lang="ts" setup>
	import { ref } from 'vue'
	import {computed} from "vue";
	
	const years = ref<number>(0);
	const days = ref<number>(0);
	
	const calculateTimePassed = () => {
      const targetDate = new Date(2020, 9, 3); // 注意月份是从0开始计数的
      const currentDate = new Date();

      const timePassed = currentDate.getTime() - targetDate.getTime();
      years.value = Math.floor(timePassed / (1000 * 60 * 60 * 24 * 365.25));
      days.value = Math.floor((timePassed / (1000 * 60 * 60 * 24)) % 365.25);
    };

    calculateTimePassed();
	
	
	const countdownText = computed(() => {
		return days.value == 0 ? `结婚：${years.value} 年` : `结婚：${years.value}年${days.value}天`;
	})
	
</script>
<style scoped>
	.image-box {
		width: 50px;
		background-image: url("@/assets/image/marry.png");;
	}
</style>