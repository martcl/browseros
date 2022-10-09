<script lang="ts">
	import OldBtn from '../inputs/oldBtn.svelte';

	let clockString: string = '';
	let dateString: string = '';

	setInterval(() => {
		clockString = new Date().toLocaleTimeString();
		dateString = new Date().toLocaleDateString();
	}, 100);
</script>

<div class="clock">
	<span>{clockString}</span>
	<span>{dateString}</span>
</div>

<style>
	.clock {
		display: flex;
		gap: 2px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f0f0f0;
		border: black 2px solid;
		padding: 5px 16px;
	}
</style>
