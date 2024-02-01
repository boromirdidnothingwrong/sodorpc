<script lang="ts">
	export let data;
	import Image from '$lib/components/Image.svelte';
</script>

<div class="container">
	{#each data.entryData.newsArticleComposer as item}
		{#if item.type === 'longText'}
			<p>{item.value}</p>
		{:else if item.type === 'image' && item.value.asset != null}
			<div>
				<Image URI={item.value.asset.sys.id} />
				<p>
					{item.value.caption || ''}
				</p>
			</div>
		{:else if item.type === 'image' && item.value.asset == null}
			<p>There was an issue loading this image.</p>
		{:else}
			<p>There was an issue loading this element.</p>
		{/if}
	{/each}
</div>
