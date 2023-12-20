<script lang="ts">
	import * as config from '$lib/config';
	const projectName: string = 'sodorPC';
	export let data;
</script>

<header>
	{#each data.children as children}
		<h3><a href={children.path}>{children.displayName} </a></h3>
	{/each}
</header>
<separator>
	<hr />
</separator>

<style>
	header {
		text-size-adjust: 2em;
	}
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}
		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
