<script lang="ts">
	export let data;
</script>

<div class="carousel rounded-box gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
	{#each data.newsData.items as item}
		<div class="card bg-base-100">
			<figure></figure>
			<div class="card-body">
				<h2 class="card-title">{item.title}</h2>
				<p>{item.entryDescription || 'A description has not been provided.'}</p>
				<div class="justify-end card-actions">
					<a role="button" class="btn btn-secondary" href={item.sys.uri}>Read more</a>
				</div>
			</div>
		</div>
	{/each}
</div>
