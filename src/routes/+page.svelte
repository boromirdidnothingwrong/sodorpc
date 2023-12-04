<script lang="ts">
	/** @type {import('./$types').PageServerData} */
	export let data;
	let datur = JSON.stringify(data);
</script>

<body>
	<div class="layout">
		<p>{datur}</p>
	</div>
</body>
