<template>
	<div class="aside">
		<div class="aside-item" @click="jumpTo('Letsgo')">
			<div class="svg-box">
				<svg-icon icon-class="letsgo" />
			</div>
			<span class="aside-title">我们走</span>
		</div>
		<div class="aside-item" @click="jumpTo('Delicious')">
			<div class="svg-box">
				<svg-icon icon-class="delicious" />
			</div>
			<span class="aside-title">一起炫</span>
		</div>
		<div class="aside-item" @click="jumpTo('Song')">
			<div class="svg-box">
				<svg-icon icon-class="song" />
			</div>
			<span class="aside-title">小情诗</span>
		</div>
		<div class="aside-item" @click="jumpTo('Draw')">
			<div class="svg-box">
				<svg-icon icon-class="dog" />
			</div>
			<span class="aside-title">灵魂画</span>
		</div>
		<div class="aside-item" @click="jumpTo('Wrong')">
			<div class="svg-box">
				<svg-icon icon-class="wrong" />
			</div>
			<span class="aside-title">真该死</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		ref
	} from 'vue'
	import {
		Document,
		Menu as IconMenu,
		Location,
		Setting,
	} from '@element-plus/icons-vue'
	import {
		useRouter,
		useRoute
	} from 'vue-router'

	const isCollapse = ref(true)
	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const menuSelect = (index: number, indexPath: string, item: object, routeResult: string) => {
		console.log(index, indexPath, item, routeResult)
	}

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
	.aside-item {
		display: flex;
		/* background: white; */
		padding: 0 10px;
		margin-bottom: 10px;
		font-size: 35px;
		border-radius: 10px;
		cursor: url("@/assets/image/flower.png") 0 32, auto;
	}

	.svg-box {
		display: flex;
		height: 54px;
		background: white;
		border-bottom-left-radius: 10px;
		border-top-left-radius: 10px;
	}

	.aside-title {
		font-family: "阿里妈妈刀隶体 Regular";
		height: 54px;
		width: 200px;
		display: inline-block;
		background: linear-gradient(to right, #fff, #FDF1EE);
		line-height: 54px;
	}
</style>
