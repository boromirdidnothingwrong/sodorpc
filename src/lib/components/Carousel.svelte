<script lang="js">
	import Component from './Component.svelte';

	export let data;
	let dataJSON = JSON.stringify(data);
</script>

<!-- Obviously for prod it'll be the website address but this proves the concept ig?

Actually why doesn't it simply fetch it? Because it's inside the component? Surely once you click it's going through the [variable] route??-->
<section>
	{#each data.newsData.items as item}
		{#if item.sys.uri != null}
			<article><div class="displayNews"><a href={item.sys.uri}>{item.title}</a></div></article>
		{/if}
	{/each}
</section>

<!--Best way to do a carousel like this will be to get all the news artcicles (or a subset, like 12) from contensis on first load. So pull them in using the top level +page.server.ts file?
Do it with promises. Once pulled we can just render the thumbnail (first image if present, or the set thumbnail is not null) and the title with a few words of text? All available there.
The link will then go to the route for that news item (so under News > in site view?) because the data is already loaded in it should be quick! To speed this up we can use the contensis feature to just fetch x words?-->

<style>
	section {
		display: flex;
	}

	.displayNews p {
		display: flex;
		flex-flow: row wrap;
		color: white;
		flex: 200px;
		padding: 50px;
		font-size: 40px;
	}

	article {
		padding: 10px;
		margin: 10px;
	}
</style>
