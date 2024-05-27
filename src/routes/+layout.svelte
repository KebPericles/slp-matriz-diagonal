<script>
	import '../app.css';
</script>

<div class="container flex-col space-y-6 text-2xl font-bold">
	<slot></slot>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		text-align: center; /* Add this line */
	}
</style>
