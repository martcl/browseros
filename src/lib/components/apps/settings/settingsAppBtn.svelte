<script lang="ts">
	import AppBtn from '$lib/components/inputs/appBtn.svelte';
	import { processes } from '$lib/stores/windows';
	import SettingsWindow from './settingsWindow.svelte';

	$: handleSettingsAppClick = () => {
		let renderedSettingsAppIndex = $processes.findIndex(
			(process) => process.title === 'Instillinger' && process.isRendered
		);
		if (renderedSettingsAppIndex === -1) {
			processes.addNewProcess({
				title: 'Instillinger',
				component: SettingsWindow
			});
			return;
		}
		processes.onFocus($processes[renderedSettingsAppIndex].id);
		processes.onMinimize($processes[renderedSettingsAppIndex].id);
	};
</script>

<AppBtn icon="url(/settings.png)" on:click={handleSettingsAppClick} />
