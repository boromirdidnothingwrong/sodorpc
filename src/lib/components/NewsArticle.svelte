<script lang="ts">
	export let data;
	let fetchy = 'https://cms-staffscc.cloud.contensis.com/api/image/';

	// Set up the uri for each one iteratively and bong them into an array, then img src is {index: value} where the index will be the uri of the news article
</script>

{#each data.entryData.newsArticleComposer as item}
	{#if item.type === 'longText'}
		<p>{item.value}</p>
	{/if}
	{#if item.type === 'image'}{/if}
{/each}
