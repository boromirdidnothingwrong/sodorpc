<script lang="ts">
	export let data;
	import '$lib/Accordion.svelte' as accordionComponent;
</script>

{#each data.entryData.composer as composer}
	<svelte:component this={composer.type} />
{/each}

<!--
<h1>{data.entryData.pageHeading || ''}</h1>
<p>{@html data.entryData.richText || ''}</p>
<p>{data.entryData.longText || ''}</p>
-->
<style>
	h1 {
		font-size: 2.5em;
	}
</style>
