<script lang="ts">
	import type { PageServerData } from './$types';
	import Component from '$lib/components/Component.svelte';
	import Councillors from '$lib/components/Councillors.svelte';
	import NewsArticle from '$lib/components/NewsArticle.svelte';
	import StandardPage from '$lib/components/StandardPage.svelte';
	export let data: PageServerData;
	import '$lib/app.pcss';
</script>

<!--Using <svelte:component this={data.entryData.sys.entryType} /> should be able to slot in each of the components depending on what's loaded in?-->
{#if data.entryData.sys.contentTypeId === 'quoteEntry'}
	<i>{data.entryData.quote.text}</i>
	<strong> - {data.entryData.quote.source}</strong>
{/if}
{#if data.entryData.sys.contentTypeId === 'newCouncillor'}
	<Councillors {data} />
{/if}
{#if data.entryData.sys.contentTypeId === 'newsArticle'}
	<NewsArticle {data} />
{/if}
{#if data.entryData.sys.contentTypeId === 'standardPage'}
	<StandardPage {data} />
{/if}
<br /><br /><br /><br /><br /><br />
<br />
<!--
{#each data.entryData.councillorinfo as councillor}
	<div>
		<h3>{councillor.name}</h3>
		<img
			src="https://preview-sodorparishcouncil-staffscc.cloud.contensis.com/{councillor
				.profilePicture.asset.sys.uri}"
			alt="Should really be done with the data from cms"
		/>
		<p>{councillor.titles || ''}</p>
		<p>{councillor.biography || ''}</p>
	</div>
{/each}
-->
<div>Page content area</div>

<style>
</style>
