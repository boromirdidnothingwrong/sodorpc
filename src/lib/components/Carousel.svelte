<script lang="ts">
	export let data;
	import Image from '$lib/components/Image.svelte';
	console.log(JSON.stringify(data.newsData.items));
</script>

<div class="carousel rounded-box flex justify-stretch gap-4">
	{#each data.newsData.items as item}
		<article><div class="displayNews"><a href={item.sys.uri}>{item.title}</a></div></article>
		{#if item.entry.entryThumbail != null}
			<p>{item.entry.entryThumbnail}</p>
		{/if}
	{/each}
</div>

<!--Best way to do a carousel like this will be to get all the news artcicles (or a subset, like 12) from contensis on first load. So pull them in using the top level +page.server.ts file?
Do it with promises. Once pulled we can just render the thumbnail (first image if present, or the set thumbnail is not null) and the title with a few words of text? All available there.
The link will then go to the route for that news item (so under News > in site view?) because the data is already loaded in it should be quick! To speed this up we can use the contensis feature to just fetch x words?-->
