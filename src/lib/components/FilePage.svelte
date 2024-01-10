<script lang="ts">
	import type { PageServerData } from '$types';

	export let data: PageServerData;
</script>

{#each data.entryData.fileUploadComponent as item}
	<h3>{item.description}</h3>
	<a
		role="button"
		class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
		href="https://live-sodorparishcouncil-staffscc.cloud.contensis.com{item.asset.sys.uri}"
		>Download</a
	>
{/each}
