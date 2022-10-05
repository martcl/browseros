<script lang="ts">
	export let text: string;
	export let name: string;
</script>

<textarea rows="4" cols="50" class="winCl-inp" {name} type="" bind:value={text} />

<style>
	.winCl-inp {
		border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #848484;
		border-top: 1px solid #848484;
		padding: 3px 15px 3px 15px;
		max-width: 100%;
		max-height: 100%;
	}

	.winCl-inp:hover,
	.winCl-inp:focus {
		outline: 0;
	}
</style>
