<script lang="ts">
	export let data;
</script>

{#each data.entryData.newsArticleComposer as item}
	{#if item.type === 'longText'}
		<p>{item.value}</p>
	{:else}
		<p>Image Here</p>
	{/if}
{/each}
