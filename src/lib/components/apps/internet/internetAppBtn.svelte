<script lang="ts">
	import AppBtn from '$lib/components/inputs/appBtn.svelte';
	import { processes } from '$lib/stores/windows';
	import InternetWindow from './internetWindow.svelte';

	$: handleMailAppClick = () => {
		processes.addNewProcess({
			title: 'THE WEEEB',
			component: InternetWindow
		});
	};
</script>

<AppBtn icon="url(/cat.png)" on:click={handleMailAppClick} />
