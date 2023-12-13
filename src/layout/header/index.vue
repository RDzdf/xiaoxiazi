<template>
	<div class="header">
		<div class="logo-box">
			<Logo/>
		</div>
		<div>
			<BirthdayCard/>
		</div>
		<div>
			<LoveAnniversaryCard/>
		</div>
		<div>
			<WeddingAnniversaryCard/>
		</div>
		<div class="me-box">
			<Me/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Logo from './components/Logo.vue'
	import BirthdayCard from './components/BirthdayCard.vue'
	import LoveAnniversaryCard from './components/LoveAnniversaryCard.vue'
	import WeddingAnniversaryCard from './components/WeddingAnniversaryCard.vue'
	import Me from './components/Me.vue'
</script>

<style>
	.header {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	.me-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>