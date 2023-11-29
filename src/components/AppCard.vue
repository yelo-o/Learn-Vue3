<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title red">Card title</h5>
			{{ classes }}
			<p class="card-text" >
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
console.log('AppCard module');
export default {
	setup() {
		console.log('AppCard setup()');
		return {};
	},
};
</script>

<style module="classes">
.red {
	color: red !important;
}
</style>

<!-- <style scoped>
.red {
	color: red !important;
}
</style> -->
