<script lang="ts">
	import type { PageServerData } from 'src/$types';
	export let data: PageServerData;
	import Image from '$lib/components/Image.svelte';
</script>

<div class="carousel rounded-box flex justify-stretch gap-4">
	{#each data.newsData.items as item}
		<article><div class="displayNews"><a href={item.sys.uri}>{item.title}</a></div></article>
		<Image URI={item.entryThumbnail.asset.sys.id} />
	{/each}
</div>

<!--Best way to do a carousel like this will be to get all the news artcicles (or a subset, like 12) from contensis on first load. So pull them in using the top level +page.server.ts file?
Do it with promises. Once pulled we can just render the thumbnail (first image if present, or the set thumbnail is not null) and the title with a few words of text? All available there.
The link will then go to the route for that news item (so under News > in site view?) because the data is already loaded in it should be quick! To speed this up we can use the contensis feature to just fetch x words?-->
