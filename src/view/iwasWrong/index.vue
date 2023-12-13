<template>
	<div class="street-sign">
		<div class="text-content">
			<P class="text-center">
			  <!-- <svg-icon width="300" height="300" icon-class="avatar"></svg-icon> -->
			</P>
			<!-- <P class="text-center bg-text">
				如何形容她呢！
			</P> -->
			<P class="text-center" style="position: relative;">
				<span class="cute">
					丢三
				</span>
				<span class="verycute">
					落四
				</span>
			</P>
			<P class="text-center" style="position: relative;">
				<span class="cute">
					巨丑
				</span>
				<span class="verycute">
					拍照
				</span>
			</P>
			<P class="text-center" style="position: relative;">
				<span class="cute">
					成性
				</span>
				<span class="verycute">
					懒惰
				</span>
			</P>
			<P class="text-center" style="position: relative;">
				<span class="cute">
					人丑
				</span>
				<span class="verycute">
					家穷
				</span>
			</P>
			<P class="text-center" style="position: relative;">
				<span class="cute">
					智障
				</span>
				<span class="verycute">
					脑残
				</span>
			</P>
		</div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const props = defineProps<{ initialParam: string }>()
  
  const paramValue = ref(props.initialParam)
  
  console.log("paramValue==", paramValue)
  </script>
  
  <style scoped>
  .bg-text {
	  text-align: center;
	  padding: 0;
	  line-height: 40px;
	  background-color: #f9f9f9;
	  border-radius: 10px;
  }
  .cute {
	  font-size: 200px;font-weight: bold;color: #FDF1E5;
  }
  .verycute {
	  font-size: 120px;
		  font-weight: bold;
		  color: #f0a354;
		  display: block;
		  width: 100%;
		  height: 200px;
		  line-height: 310px;
		  position: absolute;
		  left: 0;
		  top: 0;
  }
  </style>