<script lang="ts">
	import * as config from '$lib/config';
	const projectName: string = 'sodorPC';
	export let data;
	import Logo from '$lib/logo.svelte';
	import '$lib/app.pcss';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each data.rootNodeData.children as children}
					<a href={children.path}>{children.displayName}</a>
					<p>&nbsp;</p>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost text-xl">daisyUI</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each data.rootNodeData.children as children}
				<a href={children.path}>{children.displayName}</a>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn">Button</a>
	</div>
</div>
<header></header>

<separator>
	<hr />
</separator>

<style lang="postcss">
	nav {
		display: flex;
		justify-content: space-between;
	}
	header {
		text-size-adjust: 2em;
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
