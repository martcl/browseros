<script lang="ts">
	import Taskbar from '$lib/components/taskbar.svelte';
	import { mouse } from '$lib/stores/mouse';
	import { processes } from '$lib/stores/windows';

	$: handleMouseEvent = (e: MouseEvent) =>
		mouse.set({ x: e.clientX, y: e.clientY, mouseDown: e.buttons === 1 });
</script>

<svelte:body on:mousemove={handleMouseEvent} />

<div class="pc">
	<div class="screen">
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
		background-image: url("https://i.pinimg.com/originals/c9/01/d6/c901d66c7e1ddcc4293df9c03949decb.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
