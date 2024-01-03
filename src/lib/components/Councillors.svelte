<script lang="ts">
	export let data;
</script>

{#each data.entryData.councillorinfo as councillor}
	<p>Name: {councillor.name}</p>

	{#if councillor.titles != null}
		<p>Title: {councillor.titles}</p>
	{/if}
	{#if councillor.profilePicture != null}
		<img src={councillor.profilePicture.asset.sys.uri} alt={councillor.profilePicture.altText} />
	{/if}
	<br />
{/each}

<!--
	<div style="text-color: red;">
	<slot />{@html displayData.entryData.richText}
</div>
-->

<style>
</style>
