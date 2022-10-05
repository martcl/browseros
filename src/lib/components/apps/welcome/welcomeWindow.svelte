<script lang="ts">
	import Window from '../../misc/window.svelte';

	export let title: string;
	export let processId: number;
	export let isFocus: boolean;
</script>

<Window {title} {processId} {isFocus}>
	<h1>Velkommen til TIHLDE OS</h1>
	<img src="/TIHLDE_LOGO.png" alt="">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</Window>

