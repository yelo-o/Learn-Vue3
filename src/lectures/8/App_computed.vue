<template>
	<div>
		<p>강의가 존재 합니까?:</p>
		<!-- <span>{{ teacher.lectures.length > 0 ? 'Yes' : 'No' }}</span> -->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">Counter : {{ counter }}</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? 'Yes' : 'No';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? 'Yes' : 'No';
		};

		const counter = ref(0);

		const firstName = ref('Tom');
		const lastName = ref('Kim');

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('Console 출력 : ', fullName.value);
		fullName.value = '짐 코딩';

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
