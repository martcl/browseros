<script lang="ts">
	import { storeData } from '$lib/api/localstorage';
	import OldBtn from '../../inputs/oldBtn.svelte';
	import Textarea from '../../inputs/textarea.svelte';
	import Textinput from '../../inputs/textinput.svelte';
	import Window from '../../misc/window.svelte';

	export let title: string;
	export let processId: number;
	export let isFocus: boolean;

	let newBackground: string = '';

    $: handleSaveAndReload = () => {
        storeData('background', newBackground);
        location.reload()
    }
</script>

<Window {title} {processId} {isFocus}>
	<h2>Endre bakgrunn</h2>
	<p>Ny bakgrunn (URL)</p>
	<input bind:value={newBackground} type="text"  />

	<p>Lagre endringer, og restart OS</p>
	<div style="display: flex; align-items:flex-start">
		<OldBtn lable="Restart OS" on:click={handleSaveAndReload} />
	</div>
</Window>

<style>
</style>
