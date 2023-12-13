<template>
	<div class="mine-box" @click="jumpTo('Mine')">
		<svg-icon icon-class="me" class="svg-avatar" :width="50" :height="50" />
	</div>
</template>

<script lang="ts" setup>
import {
	useRouter,
} from 'vue-router'

const router = useRouter()

function jumpTo(name: any) {
	router.push({
		name: name,
	})
}
</script>

<style>
.mine-box {
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background: #fff;
}
</style>