<script lang="ts">
	export let data;
</script>

<div class="card">
	<slot />
</div>
{#each data.entryData.councillorinfo as councillor}
	<p>Name: {councillor.name}</p>

	{#if councillor.titles != null}
		<p>Title: {councillor.titles}</p>
	{/if}
	<br />
{/each}

<!--
	<div style="text-color: red;">
	<slot />{@html displayData.entryData.richText}
</div>
-->
