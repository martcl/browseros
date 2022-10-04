<script lang="ts">
	import MailWindow from './mailWindow.svelte';
	import { processes } from '$lib/stores/windows';
	import OldBtn from './oldBtn.svelte';

	$: openMailApp = () => {
		processes.addNewProcess({ title: 'TIHLDE Mail App', component: MailWindow.bind(Math.random()) });
	};

    $: handleMinimizeWindow = (id: number) => {
        processes.onMinimize(id)
    }

</script>

<div class="taskbar">
	<div class="image-div">
		<img src="/TIHLDE_LOGO.png" alt="TIHLDE logo" />
	</div>
	<div>
		<OldBtn lable="" style="background-size: 70%; padding: 20px; background-image: url('/mails.png'); background-position: center; background-repeat: no-repeat; height: 40px; width: 40px;" on:click={openMailApp}></OldBtn>
	</div>
	<div class="tasks">
		{#each $processes as process}
			<button on:click={() => handleMinimizeWindow(process.id)} class="task-{process.isOpen ? 'open': 'minimized'}">{process.title}, {process.id}</button>
		{/each}
	</div>
</div>

<style>
	.taskbar {
		background-color: rgb(251, 251, 251);
		padding: 10px;
		display: flex;
        background-size: 50%;
        gap: 20px;
        z-index: 200;
        border-top: black 2px solid;
	}

	.taskbar .image-div {
		height: 45px;
		object-fit: cover;
        border-right: black 2px solid;
        padding-right: 30px;
	}

	.taskbar .image-div img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
		user-select: none;
        
	}

    .taskbar .tasks {
        display: flex;
        max-width: 70%;
        overflow-x: scroll;
    }

    .taskbar .tasks .task-open {
        border-left: 1px solid #fff;
		border-top: 1px solid #fff;
		border-right: 1px solid #848484;
		border-bottom: 1px solid #848484;
		background-color: transparent;
		padding: 3px 15px 3px 15px;
    }

    .taskbar .tasks .task-minimized {
        border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #848484;
		border-top: 1px solid #848484;
    }
</style>
