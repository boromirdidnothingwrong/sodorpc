<script lang="ts">
	import type { PageServerData } from '../$types';
	import Councillors from '$lib/components/Councillors.svelte';
	import NewsArticle from '$lib/components/NewsArticle.svelte';
	import StandardPage from '$lib/components/StandardPage.svelte';
	import FilePage from '$lib/components/FilePage.svelte';
	export let data: PageServerData;
</script>

<div class="container mx-auto px-8">
	<!--Using <svelte:component thdatadata.entryData.sys.entryType} /> should be able to slot in each of the components depending on what's loaded in?-->
	{#if data.entryData.sys.contentTypeId === 'newCouncillor'}
		<Councillors {data} />
	{/if}
	{#if data.entryData.sys.contentTypeId === 'newsArticle'}
		<NewsArticle {data} />
	{/if}
	{#if data.entryData.sys.contentTypeId === 'standardPage'}
		<StandardPage {data} />
	{/if}
	{#if data.entryData.sys.contentTypeId === 'fileUpload'}
		<FilePage {data} />
	{/if}
	<br /><br /><br /><br /><br /><br />
	<br />
</div>

<style>
</style>
