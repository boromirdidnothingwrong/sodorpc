<script lang="ts">
	export let data;
</script>

<div class="collapse collapse-close bg-base-200">
	{#each data as line}
		<input type="radio" name="my-accordion-1" />
		<div class="collapse-title collapse-close text-xl font-medium">
			{line.question}
		</div>
		<div class="collapse-content collapse-close">
			{@html line.answer}
		</div>
	{/each}
</div>
