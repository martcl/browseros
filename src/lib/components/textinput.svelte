<script lang="ts">
    export let text: string
    export let name: string
</script>

<input class="winCl-inp" type="text" name="{name}" bind:value={text}>

<style>
    .winCl-inp {
        max-width: 100%;
        border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #848484;
		border-top: 1px solid #848484;
		padding: 3px 15px 3px 15px;
	}

	.winCl-inp:hover,
	.winCl-inp:focus {
		outline: 0;
	}

</style>