<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
			necessitatibus iusto quidem saepe ab in excepturi vero architecto animi
			repudiandae maxime voluptatum libero perspiciatis autem praesentium
			mollitia, dolor cumque magnam?
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';
export default {
	setup() {
		//정적
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontsize: '13px',
		// });

		//반응형
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
