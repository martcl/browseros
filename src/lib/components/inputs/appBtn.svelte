<script lang="ts">
	export let icon: string = 'url(/forbidden.png)';
</script>

<button style="--icon: {icon}" on:click />

<style>
	button {
		height: 45px;
		width: 45px;
		background-image: var(--icon);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 90%;
	}
</style>
