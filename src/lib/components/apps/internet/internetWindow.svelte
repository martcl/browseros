<script lang="ts">
	import Window from '../../misc/window.svelte';

	export let title: string;
	export let processId: number;
	export let isFocus: boolean;

    let windowWidth = 400
    let windowHeight = 400
</script>

<Window {title} {processId} {isFocus} bind:windowWidth={windowWidth} bind:windowHeight={windowHeight}>
    <iframe height="{windowHeight}px" width="{windowWidth}px" title="WEEB" src="https://www.youtube.com/embed/QH2-TGUlwu4"></iframe>
</Window>

<style>
</style>
