<script lang="ts">
	export let displayData;

	// do we do an array pointing to each sub component? And dynamically render them? idefk
	let entryType: string = '';
</script>

<div style="text-color: red;">
	<svelte:component this={entryType}></svelte:component>
	{@html displayData.entryData.richText}
</div>
