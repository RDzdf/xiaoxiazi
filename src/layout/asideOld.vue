<template>
	<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
		<el-radio-button :label="false">expand</el-radio-button>
		<el-radio-button :label="true">collapse</el-radio-button>
	</el-radio-group>
	<el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
		@close="handleClose" @select="menuSelect">
		<el-sub-menu index="1">
			<template #title>
				<el-icon>
					<location />
				</el-icon>
				<svg-icon icon-class="letsgo" />
				<span class="aside-title">我们走</span>
			</template>
		</el-sub-menu>
		<el-menu-item index="2">
			<el-icon>
				<icon-menu />
			</el-icon>
			<template #title>一起炫</template>
		</el-menu-item>
		<el-menu-item index="3" disabled>
			<el-icon>
				<document />
			</el-icon>
			<template #title>小情诗</template>
		</el-menu-item>
		<el-menu-item index="4">
			<el-icon>
				<setting />
			</el-icon>
			<template #title>灵魂画</template>
		</el-menu-item>
		<el-menu-item index="5">
			<el-icon>
				<setting />
			</el-icon>
			<template #title>真该死</template>
		</el-menu-item>
	</el-menu>
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
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.aside-title {
		font-family: "阿里妈妈刀隶体 Regular";
	}
</style>
