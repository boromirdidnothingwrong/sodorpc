<script lang="ts">
	export let data;
	import Image from '$lib/components/Image.svelte';
	import Map from '$lib/components/Map.svelte';
</script>

{#each data.entryData.composer as composer}
	<div class="p-4">
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
		{:else if composer.type == 'richText'}
			{#each composer.value as value}
				{@html value}
			{/each}
		{:else if composer.type == 'image'}
			{#each composer.value as value}
				{#if composer.value.asset != null}
					<Image URI={value.asset.sys.id} />
				{/if}
			{/each}
		{:else if composer.type == 'map'}
			{@const map = composer.value}

			{@html composer.value}
		{/if}
	</div>
{/each}

<!--
<h1>{data.entryData.pageHeading || ''}</h1>
<p>{@html data.entryData.richText || ''}</p>
<p>{data.entryData.longText || ''}</p>
-->
<style>
</style>
