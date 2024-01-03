<script lang="ts">
	export let data;
	let dataJSON = JSON.stringify(data.entryData);
	import Accordion from '$lib/components/Accordion.svelte';
</script>

{#each data.entryData.composer as composer}
	{#if composer.type == 'accordionComponent'}
		{#each composer.value as line}
			<div class="collapse bg-base-200">
				<input type="radio" name="my-accordion-1" checked="checked" />
				<div class="collapse-title text-xl font-medium">
					{line.question}
				</div>
				<div class="collapse-content">
					{@html line.answer}
				</div>
			</div>
		{/each}
	{/if}
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
