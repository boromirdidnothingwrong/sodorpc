<script lang="ts">
	import type { PageServerData } from '$types';
	import Image from '$lib/components/Image.svelte';
	export let data: PageServerData;
</script>

{#each data.entryData.councillorinfo as { name, titles, profilePicture }}
	<p>Name: {name}</p>

	{#if titles != null}
		<p>Title: {titles}</p>
	{/if}
	<div>
		<img
			src="https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat"
			alt={profilePicture.altText}
		/>
	</div>
{/each}

<!--
	<div style="text-color: red;">
	<slot />{@html displayData.entryData.richText}
</div>
-->

<style>
</style>
