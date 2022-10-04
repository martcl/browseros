<script lang="ts">
	import OldBtn from './oldBtn.svelte';
    import Textarea from './textarea.svelte';
	import Textinput from './textinput.svelte';
	import Window from './window.svelte';

    export let title: string
    export let processId: number
    export let isFocus: boolean
    
</script>

<Window title={title} processId={processId} isFocus={isFocus}>
	<form class="form">
		<label for="to">Til</label>
		<Textinput name="to" text="Test" />
		<label for="to">Innhold</label>
		<Textinput name="to" text="Test" />
		<br />
		<label for="body">Melding</label>
		<Textarea name="body" text="dad" />
        <OldBtn type="submit" lable="Send"></OldBtn>
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
