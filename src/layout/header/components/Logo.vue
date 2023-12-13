<template>
	<div class="svg-avatar" @click="jumpTo('Girl')">
		<svg-icon icon-class="avatar" width="50" height="50"/>
	</div>
</template>

<script lang="ts" setup>
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	
	const router = useRouter()
	const route = useRoute()
	
	function jumpTo(name, query) {
		router.push({
			name: name,
			query: {
				...route.query,
				...query,
			},
		})
	}
</script>

<style>
	.svg-avatar {
		height: 50px;
		width: 50px;
		border-radius: 25px;
		overflow: hidden;
	}
</style>