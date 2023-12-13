<template>
	<el-container class="xxz-container">
		<el-header height="auto">
			<Header />
		</el-header>
		<el-container>
			<el-aside class="xxz-aside" width="200px">
				<Aside></Aside>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
				<el-footer>
					爱你哦
				</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
	import Header from "../layout/header/index.vue"
	import Aside from "../layout/aside.vue"
</script>

<style lang="scss" scoped>
	.xxz-container {
		height: 100%;
		.xxz-aside {
			width: 200px;
			display: flex;
			flex-direction: column;
			height: 100%;
			padding-top: 30px;
			// justify-content: center;
		}
	}
</style>
