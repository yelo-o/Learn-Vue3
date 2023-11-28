<template>
	<div>
		<!-- Inline -->
		<!-- <div class="text" :class="{ active: isActive, 'text-danger': hasError }"> -->

		<!-- Object -->
		<div class="text" :class="[activeClass, errorClass, classObject]">
			텍스트입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';
export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObject = computed(() => {
			return {
				active: isActive.value && !hasError.value,
				'text-danger': !isActive.value && hasError.value,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return { isActive, toggle, hasError, classObject, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
