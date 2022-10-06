<script lang="ts">
	import MailWindow from '../apps/mail/mailWindow.svelte';
	import { processes } from '$lib/stores/windows';
	import OldBtn from '../inputs/oldBtn.svelte';
	import SettingClock from '../misc/settingClock.svelte';
	import App from '../inputs/appBtn.svelte';
	import MailAppBtn from '../apps/mail/mailAppBtn.svelte';
	import SettingsAppBtn from '../apps/settings/settingsAppBtn.svelte';
	import InternetAppBtn from '../apps/internet/internetAppBtn.svelte';


	$: handleMinimizeWindow = (id: number) => {
		processes.onMinimize(id);
	};

</script>

<div class="taskbar">
	<span class="taskbar-left">
		<div class="image-div">
			<img src="/TIHLDE_LOGO.png" alt="TIHLDE logo" />
		</div>
		<hr />
		<MailAppBtn />
		<SettingsAppBtn />

		<InternetAppBtn />
		<hr />
		<div class="tasks">
			{#each $processes as process}
				{#if process.isRendered}
					<button
						on:click={() => handleMinimizeWindow(process.id)}
						class="task-{process.isOpen ? 'open' : 'minimized'}"
						>{process.title}, {process.id}</button
					>
				{/if}
			{/each}
		</div>
	</span>
	<SettingClock />
</div>

<style>
	.taskbar {
		background-color: rgb(251, 251, 251);
		padding: 10px;
		display: flex;
		background-size: 50%;
		justify-content: space-between;
		gap: 20px;
		z-index: 200;
		border-top: black 2px solid;
	}

	.taskbar-left {
		display: flex;
		gap: 20px;
	}

	.image-div {
		height: 45px;
		object-fit: cover;
	}

	.image-div img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
		user-select: none;
	}

	.tasks {
		display: flex;
		max-width: 70%;
		overflow-x: scroll;
	}

	.tasks .task-open {
		border-left: 1px solid #fff;
		border-top: 1px solid #fff;
		border-right: 1px solid #848484;
		border-bottom: 1px solid #848484;
		background-color: transparent;
		padding: 3px 15px 3px 15px;
	}

	.tasks .task-minimized {
		border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #848484;
		border-top: 1px solid #848484;
	}
</style>
