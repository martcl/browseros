<script lang="ts">
	import { retriveData } from '$lib/api/localstorage';
	import Taskbar from '$lib/components/navigation/taskbar.svelte';
	import { mouse } from '$lib/stores/mouse';
	import { processes } from '$lib/stores/windows';

	$: handleMouseEvent = (e: MouseEvent) =>
		mouse.set({ x: e.clientX, y: e.clientY, mouseDown: e.buttons === 1 });

	let backgroundImage = retriveData('background') || 'https://wallpaperaccess.com/full/52448.jpg';
</script>

<svelte:body on:mousemove={handleMouseEvent} />

<div class="pc">
	<div class="screen" style="--background-image: url({backgroundImage})">
		{#each $processes as process, i}
			<svelte:component
				this={process.component}
				isFocus={process.isFocus}
				processId={process.id}
				title={process.title}
			/>
		{/each}
	</div>
	<Taskbar />
</div>

<style>
	:global(body) {
		margin: 0px;
		padding: 0px;
	}
	:global(h1, h2) {
		font-family: Oswald, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.pc {
		display: flex;
		height: 100vh;
		flex-direction: column;
		justify-content: space-between;
	}

	.screen {
		display: flex;
		flex-grow: 1;
		background-image: var(--background-image);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
