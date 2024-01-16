<script lang="ts">
	export let data;
	import Image from '$lib/components/Image.svelte';
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
				<div>{@html value}</div>
			{/each}
		{:else if composer.type == 'location'}
			<p style="text-color: red">
				If you can't see a map here, the web developer hasn't finished implementing the feature.
			</p>
		{:else if composer.type == 'image'}
			{#each composer.value as value}
				{#if composer.value.asset != null}
					<Image URI={value.asset.sys.id} />
				{/if}
			{/each}
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
