<template>
	<main>
		<div class="container py-4">
			<div class="row g-3">
				<div class="col col-4">
					<AppCard title="제목1" contents="내용1"></AppCard>
				</div>
				<div class="col col-4">
					<AppCard :title="post.title" :contents="post.contents"></AppCard>
				</div>
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
				<div class="col col-4"><AppCard></AppCard></div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
	components: {
		AppCard,
	},
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});
		return { post };
	},
};
</script>

<style lang="scss" scoped></style>
