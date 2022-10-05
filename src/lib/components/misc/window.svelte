<script lang="ts">
	import { mouse } from '$lib/stores/mouse';
	import { processes } from '$lib/stores/windows';
	import OldBtn from '../inputs/oldBtn.svelte';
	// animations
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	// ---- component parameters

	export let title: string;
	export let processId: number = 0;

	// ----- variables for window

	// initial window dimentions
	let windowWidth = 500;
	let windowHeight = 500;

	// x, y cords of top left corner
	let windowPosX = Math.random() * 400;
	let windowPosY = Math.random() * 200;

	// values to check if user is interacting with window
	let isActiveDragWindow = false;
	let isActiveDragSize = false;

	// storing initial values on clicked
	// this is to get pos where mouse is on the window when dragging
	let clickedPosDiffX: number;
	let clickedPosDiffY: number;
	let clickedSizeX: number;
	let clickedSizeY: number;

	// store the client window width
	let clientWindowWidth: number;

	export let isFocus: boolean;

	// function to handle movement of window
	$: handleMouseDownDrag = (e: MouseEvent) => {
		if (isActiveDragWindow) return;
		isActiveDragWindow = true;
		clickedPosDiffX = $mouse.x - windowPosX;
		clickedPosDiffY = $mouse.y - windowPosY;
	};

	// function to handle scaling of window
	$: handleMouseDownSize = (e: MouseEvent) => {
		if (isActiveDragSize) return;
		isActiveDragSize = true;
		clickedPosDiffX = $mouse.x - windowPosX;
		clickedPosDiffY = $mouse.y - windowPosY;
		clickedSizeX = windowWidth;
		clickedSizeY = windowHeight;
	};

	$: handleWindowExit = () => {
		console.log($processes);
		console.log(processId);
		processes.removeProcessWithId(processId);
		console.log($processes);
	};

	$: handleWindowMinimize = () => {
		processes.onMinimize(processId);
	};

	mouse.subscribe((newMouse) => {
		if (!newMouse.mouseDown) {
			isActiveDragWindow = false;
			isActiveDragSize = false;
			return;
		}
		if (isActiveDragWindow) {
			windowPosX = newMouse.x - clickedPosDiffX;
			windowPosY = newMouse.y - clickedPosDiffY;
			return;
		}
		if (isActiveDragSize) {
			// this is cinda bugged. !TODO: fix it
			windowWidth = clickedSizeX + newMouse.x - clickedPosDiffX - windowPosX;
			windowHeight = clickedSizeY + newMouse.y - clickedPosDiffY - windowPosY;
			return;
		}
	});

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
</script>

<svelte:window bind:innerWidth={clientWindowWidth} />

{#key $processes.find((process) => process.id == processId)?.isOpen}
	{#if $processes.find((process) => process.id == processId)?.isOpen}
		<div
			in:receive={{ key: processId }}
			out:send={{ key: processId }}
			on:mousedown={() => {
				processes.onFocus(processId);
			}}
			name="window"
			class="window"
			class:elivation={isFocus}
			style="--window-pos-x: {windowPosX}px; --window-pos-y: {windowPosY}px; --window-width: {windowWidth}px;  --window-height: {windowHeight}px; --z-index: {isFocus
				? 100
				: 1};"
		>
			<div class="window-header" on:mousedown={handleMouseDownDrag}>
				<h2>{title}</h2>
				<div class="window-buttons">
					<OldBtn on:click={handleWindowMinimize} lable="_" />
					<OldBtn on:click={handleWindowExit} lable="x" />
				</div>
			</div>
			<div class="window-body">
				<slot />
			</div>
			<div class="window-footer">
				<span class="expand" on:mousedown={handleMouseDownSize} />
			</div>
		</div>
	{/if}
{/key}

<style>
	.window {
		background-color: whitesmoke;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 4px 4px;
		border: rgb(66, 66, 66) 2px solid;
		width: var(--window-width);
		height: var(--window-height);
		position: absolute;
		top: var(--window-pos-y);
		left: var(--window-pos-x);
		z-index: var(--z-index);
		min-width: 350px;
		min-height: 300px;
	}
	.elivation {
		box-shadow: 0px 24px 48px 0 rgba(0,0,0,0.16);
	}
	.window-header {
		background-color: rgb(72, 89, 199);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 10px;
		user-select: none;
		color: white;
		cursor: grab;
	}
	.window-header .window-buttons {
		display: flex;
	}

	.window-body {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		overflow: scroll;
	}
	.window-footer {
		position: relative;
	}

	.window-footer .expand {
		float: right;
		height: 30px;
		width: 30px;
		user-select: none;
		background-color: rgb(213, 213, 213);
		background-image: url('/expand-window.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		cursor: grab;
	}
</style>
