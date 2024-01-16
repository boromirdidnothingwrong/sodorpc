<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	export let data;
</script>

{#each data.entryData.councillorinfo as { name, titles, profilePicture, biography }}
	<p>Name: {name}</p>

	{#if titles != null}
		<p>Title: {titles}</p>
	{/if}
	{#if profilePicture.asset != null}
		<div>
			<Image URI={profilePicture.asset.sys.id} />
		</div>
	{/if}
	{#if biography != null}
		<p class="bg-slate-400">{biography}</p>
	{/if}
{/each}

<style>
</style>
