<script lang="ts">
	import { onMount } from 'svelte';
	export let URI: string;

	let loaded = false;
	let failed = false;
	let loading = false;

	let prefix = 'https://cms-staffscc.cloud.contensis.com/api/image/';
	onMount(() => {
		const img = new Image();
		img.src = prefix.concat(URI);
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loaded}
	<img src={prefix.concat(URI)} alt="Document" />
{:else if failed}
	<img
		class=""
		src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg"
		alt="Not Found"
	/>
{:else if loading}
	<span class="loading loading-dots loading-md"></span>
{/if}
