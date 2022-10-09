<script lang="ts">
	import { processes } from '$lib/stores/windows';
	import OldBtn from '../../inputs/oldBtn.svelte';
	import Textarea from '../../inputs/textarea.svelte';
	import Textinput from '../../inputs/textinput.svelte';
	import Window from '../../misc/window.svelte';
	import ReadMailWindow from './readMailWindow.svelte';

	export let title: string;
	export let processId: number;
	export let isFocus: boolean;

	$: handleSubmit = async (e) => {
		const formData = new FormData(e.target);
		const data: { [key: string]: FormDataEntryValue } = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		try {
			const response = await fetch('/api/mail', {
				method: 'POST',
				body: JSON.stringify({ reciver: data.reciver, header: data.header, message: data.message }),
				headers: {
					'content-type': 'application/json'
				}
			});

			let total = await response.json();
			processes.addNewProcess({
				title: 'NY MAIL: --' + total,
				component: ReadMailWindow
			});
			return;
		} catch (error) {
			alert('somthign went wrong?? ', error);
		}
	};
</script>

<Window {title} {processId} {isFocus}>
	<slot />
	<form class="form" on:submit|preventDefault={handleSubmit}>
		<label for="to">Til</label>
		<Textinput name="to" text="Test" />
		<label for="to">Innhold</label>
		<Textinput name="to" text="Test" />
		<br />
		<label for="body">Melding</label>
		<Textarea name="body" text="dad" />
		<OldBtn type="submit" lable="Send" />
	</form>
</Window>

<style>
	.form {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: flex-start;
		gap: 5px;
	}
</style>
