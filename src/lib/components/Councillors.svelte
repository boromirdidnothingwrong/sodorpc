<script lang="ts">
	import type { PageData } from '$types';
	import Image from '$lib/components/Image.svelte';
	export let data: PageData;
</script>

{#each data.entryData.councillorinfo as councillor}
	<p>Name: {councillor.name}</p>

	{#if councillor.titles != null}
		<p>Title: {councillor.titles}</p>
	{/if}
	<div>
		<img
			src="https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat"
			alt={councillor.profilePicture.altText}
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
