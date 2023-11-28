<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);
		const obj = reactive({
			count: 0,
		});

		//#1
		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum :', sum);
		// 		console.log('oldValue :', oldValue);
		// 	},
		// );

		//#2
		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		//#3 반응형 객체 (getter 사용 필요)
		console.log(typeof obj.count);
		// watch(obj.count, (newValue, oldValue) => {
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log('newValue : ', newValue);
		// 	},
		// );

		// watch(obj, (newValue, oldValue) => {
		// 	console.log('newValue : ', newValue);
		// 	console.log('oldValue : ', oldValue);
		// });

		//깊은 감시자
		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue : ', newValue);
			},
		);

		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
