<script lang="ts">
	import { Paginator } from '@skeletonlabs/skeleton';
	import type { PageServerData } from './$types';
	import { sanitize, isSupported } from 'isomorphic-dompurify';
	export let data;
	export const datajson = JSON.stringify(data);
	import Component from '$lib/components/Component.svelte';

	/* we could probably use data to fill the source with source data, each set would need to be an array of it's own, title and summary 
	This would be great for a blog slider. Get every child of the "blog" node
	*/
	const blog1 = { title: 'Title1', summary: 'Farty Towels' };
	const blog2 = { title: 'Title2', summary: 'Farty Arse' };
	const blog3 = { title: 'Title3', summary: 'Farty Bedsheets' };
	const blog4 = { title: 'Title4', summary: 'Farty Oven' };

	const source = [blog1, blog2, blog3, blog4];
	/* To make the pagination work we need to set an amount, even if that amount is fixed as 3 */
	let paginationSettings = {
		page: 3,
		limit: 1,
		size: source.length,
		amounts: [3]
	};
	$: paginatedSource = source.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);

	// Some of the data passed in could be HTML using the rich text element. So to prevent XSS we need to sanitize it.
	// To do this we're going to use DOMPurify. Implement it like so: const clean = DOMPurify.sanitize(dirty);
	// And then pass "clean" or whatever we call it in as an element? Not 100% on that part.
	// Might be we can call purify in the richText.svelte component and then pass down clean HTML and render it straight in like {@html data.richText} instead
</script>

<!-- By a similar dint, check out here: https://learn.svelte.dev/tutorial/svelte-component With that we should be able to create standard templates
for each content type and then render them into their own divs to keep everything neat.-->
<body>
	<h1 style="text: centered">{data.entryData.entryTitle}</h1>
	<p>If you can see this it's working?</p>
	<p></p>
	<div class="data">
		<Component displayData={data} />
	</div>
	<br />
</body>

<style>
</style>
