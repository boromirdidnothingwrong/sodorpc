<script lang="ts">
	export let data;
</script>

<h1>{data.entryData.pageHeading || ''}</h1>
<p>{@html data.entryData.richText || ''}</p>
<p>{data.entryData.longText || ''}</p>

<style>
	h1 {
		font-size: 2.5em;
	}
</style>
