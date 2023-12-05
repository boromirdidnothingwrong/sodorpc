<script lang="ts">
	import { Paginator } from '@skeletonlabs/skeleton';
	/** @type {import('./$types').PageServerData} */
	export let data;
	let datur = JSON.stringify(data);
	/* we could probably use data to fill the source with source data, each set would need to be an array of it's own, title and summary */
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
</script>

<body>
	<br />
	<div class="layout">
		<div class="menubar"></div>
	</div>
	<h1 style="text-align: center">Edingale Parish Council</h1>
	<br />

	<div>Page content area</div>
	<div style="margin: auto; width: 50%; padding: 10px;">
		<ul>
			{#each paginatedSource as blog}
				<h3>{blog.title}</h3>
				<p>{blog.summary}</p>
			{/each}
		</ul>
		<Paginator
			bind:settings={paginationSettings}
			showFirstLastButtons={false}
			showPreviousNextButtons={true}
		/>
	</div>
	<div id="map">
		<div class="mapouter">
			<div class="gmap_canvas">
				<iframe
					title="Map showing Edingale Parish Council"
					width="100%"
					height="400"
					id="gmap_canvas"
					src="https://maps.google.com/maps?q= Edingale&t=&z=16&ie=UTF8&iwloc=&output=embed"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
				></iframe>
				<style>
					.mapouter {
						position: relative;
						text-align: right;
						height: 400px;
						width: 100%;
					}
					.gmap_canvas {
						overflow: hidden;
						background: none !important;
						height: 400px;
						width: 100%;
					}
				</style>
			</div>
		</div>
	</div>
</body>

<style>
</style>
