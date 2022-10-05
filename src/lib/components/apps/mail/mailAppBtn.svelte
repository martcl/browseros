<script lang="ts">
	import AppBtn from '$lib/components/inputs/appBtn.svelte';
	import { processes } from '$lib/stores/windows';
	import MailWindow from './mailWindow.svelte';

	$: handleMailAppClick = () => {
        let renderedMailAppIndex = $processes.findIndex((process) => process.title === 'TIHLDE Mail App' && process.isRendered)
		if (renderedMailAppIndex === -1) {
			processes.addNewProcess({
				title: 'TIHLDE Mail App',
				component: MailWindow
			});
            return
		}
        processes.onFocus($processes[renderedMailAppIndex].id)
        processes.onMinimize($processes[renderedMailAppIndex].id)
	};
</script>

<AppBtn icon="url(/mails.png)" on:click={handleMailAppClick} />
