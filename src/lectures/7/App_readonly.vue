<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		//Original
		const original = reactive({
			count: 0,
		});

		//Copy
		const copy = readonly(original);

		//Increase
		original.count++;
		copy.count++;

		console.log('original.count', original.count);
		console.log('copy.count', copy.count);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
