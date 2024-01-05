<script lang="ts">
	export let data;
	import Image from '$lib/components/Image.svelte';
</script>

<div class="carousel rounded-box flex grow justify-stretch gap-4">
	{#each data.newsData.items as item}
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<!--	{#if item.thumbnailImage.asset.sys.id != undefined}
					<Image URI={item.thumbnailImage.asset.sys.id} />
				{:else}
					<Image URI="defaultNews" />
				{/if}-->
			</figure>
			<div class="card-body">
				<h2 class="card-title">{item.title}</h2>
				<p>{item.entry.entryDescription}</p>
				<div class="card-actions justify-end">
					<a role="button" class="btn btn-primary" href={item.sys.uri}>Link</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<!--Best way to do a carousel like this will be to get all the news artcicles (or a subset, like 12) from contensis on first load. So pull them in using the top level +page.server.ts file?
Do it with promises. Once pulled we can just render the thumbnail (first image if present, or the set thumbnail is not null) and the title with a few words of text? All available there.
The link will then go to the route for that news item (so under News > in site view?) because the data is already loaded in it should be quick! To speed this up we can use the contensis feature to just fetch x words?-->
