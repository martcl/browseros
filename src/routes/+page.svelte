<script lang="ts">
	import MailWindow from '$lib/components/mailWindow.svelte';
	import ReadMailWindow from '$lib/components/readMailWindow.svelte';
	import Taskbar from '$lib/components/taskbar.svelte';
	import type Window from '$lib/components/window.svelte';
	import { mouse } from '$lib/stores/mouse';
	import { processes } from '$lib/stores/windows';

	$: handleMouseEvent = (e: MouseEvent) =>
		mouse.set({ x: e.clientX, y: e.clientY, mouseDown: e.buttons === 1 });
        

</script>

<svelte:body on:mousemove={handleMouseEvent} />

<div class="pc">
	<div class="screen">
        {#each $processes as process, i}
            <svelte:component isFocus={process.isFocus} processId={process.id} title={process.title} this={process.component}/>
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

    .screen{
        display: flex;
        flex-grow: 1;
        background-color: rgb(82, 67, 93);
    }
</style>
