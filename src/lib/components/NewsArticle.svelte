<script lang="ts">
	export let data;
	import Image from '$lib/components/Image.svelte';
	let fetchy = 'https://cms-staffscc.cloud.contensis.com/api/image/';

	// Set up the uri for each one iteratively and bong them into an array, then img src is {index: value} where the index will be the uri of the news article
</script>

{#each data.entryData.newsArticleComposer as item, i}
	{#if item.type === 'longText'}
		<p>{item.value}</p>
	{:else if item.type === 'image' && item.value.asset != null}
		<Image URI={item.value.asset.sys.id} />
	{:else}
		<p>{i + 1} There was an issue loading this image.</p>
	{/if}
{/each}
