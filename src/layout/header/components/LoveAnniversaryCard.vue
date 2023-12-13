<template>
	<!-- Love Anniversary Card -->
	<div class="love-card">
		<div class="card-content">
			<div class="image-box"></div>
			<P class="days">
				<span>{{countdownText}}</span>
			</P>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	import {computed} from "vue";
	
	const years = ref<number>(0);
	const days = ref<number>(0);
	
	
	const calculateTimePassed = () => {
		// 其实具体日期记不住了，反正是中秋节放假去玩，就取了那个周六。嘿嘿，
      const targetDate = new Date(2016, 8, 17); // 注意月份是从0开始计数的
      const currentDate = new Date();

      const timePassed = currentDate.getTime() - targetDate.getTime();
      years.value = Math.floor(timePassed / (1000 * 60 * 60 * 24 * 365.25));
      days.value = Math.floor((timePassed / (1000 * 60 * 60 * 24)) % 365.25);
    };
	
	const countdownText = computed(() => {
		return days.value == 0 ? `相识：${years.value} 年` : `相识：${years.value}年${days.value}天`;
	})

    calculateTimePassed();
	

    // return {
    //   years,
    //   days
    // };
	const isCollapse = ref(true)
	
</script>
<style scoped>
	.image-box {
		width: 50px;
		background-image: url("@/assets/image/cuteface.png");;
	}
</style>