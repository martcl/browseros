<script lang="ts">
	import Window from '../../misc/window.svelte';
	export let title: string;
	export let processId: number;
	export let isFocus: boolean;
</script>

<Window {title} {processId} {isFocus}>
	<h2>MELDIGN FRA ...</h2>
	<p>fra: noreply@tihlde.org</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
	</p>
</Window>
