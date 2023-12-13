<template>
	<div class="text-content">
		<p class="title">{{ content.title }}</p>
		<p class="sub-title">{{ content.subTitle }}</p>
		<div v-html="content.content"></div>
		<p class="time">{{ content.time }}</p>
		<p class="pagination">
			<span v-if="contentId > 1" @click="Previous">上一篇</span>
			<span @click="nextOne">下一篇</span>
		</p>
	</div>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
let content = ref({
	title: null,
	time: null,
	subTitle: null,
	content: null,
});
let contentId = ref();
const route = useRoute();

const getContent = (id: any) => {
	axios.get('/api/letsgo/content/' + id, { params: { id: id } })
		.then((response: any) => {
			// 请求成功，获取返回的用户数据
			// console.log("response===", response);
			content.value = response.data;
		})
		.catch((error: any) => {
			// 请求失败，获取错误信息
			// this.error = error.message;
			console.error("error===", error);
		});
}
const Previous = () => {
	contentId.value --;
	getContent(contentId.value);
	scrollToTop();
}
const nextOne = () => {
	contentId.value ++;
	getContent(contentId.value);
	scrollToTop();
}
const scrollToTop = () => {
	window.scrollTo({
		top: 0, //回到顶部
		left: 0,
		behavior: "smooth", //smooth 平滑；auto:瞬间
	});
};

// const totop = ref();

onMounted(() => {
	const { id } = route.params;
	if (id) {
		contentId.value = id;
		getContent(id)
	}
	// 页面滚动窗口监听事件
	// window.onscroll = function () {
	// 	// 获取浏览器卷去的高度
	// 	let high = document.documentElement.scrollTop || document.body.scrollTop; //兼容各浏览器
	// 	if (high >= 900) {
	// 		totop.value.style.display = "block";
	// 	} else {
	// 		totop.value.style.display = "none";
	// 	}
	// };

})

</script>