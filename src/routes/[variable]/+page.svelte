<script lang="ts">
	import { Paginator } from '@skeletonlabs/skeleton';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let JSONdata = JSON.stringify(data);
</script>

<h2>{JSONdata}</h2>

<br /><br /><br /><br /><br /><br />
<br />
{#each data.entryData.councillorinfo as councillor}
	<div>
		<h3>{councillor.name}</h3>
		<img
			src="https://preview-sodorparishcouncil-staffscc.cloud.contensis.com/{councillor
				.profilePicture.asset.sys.uri}"
		/>
		<p>{councillor.titles || ''}</p>
		<p>{councillor.biography || ''}</p>
	</div>
{/each}
<div>Page content area</div>

<style>
</style>
