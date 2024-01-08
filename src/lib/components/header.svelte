<script lang="ts">
	import * as config from '$lib/config';
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
					{#if children.childCount > 0}
						<li>
							<a href={children.path}>{children.displayName}</a>
							<ul class="p-2">
								{#each children.children as submenu}
									<li><a href={submenu.path}>{submenu.displayName}</a></li>
								{/each}
							</ul>
						</li>
					{:else}
						<li><a href={children.path}>{children.displayName}</a></li>
					{/if}
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost text-xl" href="/">Sodor Parish Council</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each data.rootNodeData.children as children}
				{#if children.childCount > 0}
					<li>
						<details>
							<summary> <a href={children.path}>{children.displayName}</a></summary>

							<ul class="p-2 z-50">
								{#each children.children as submenu}
									<li><a href={submenu.path}>{submenu.displayName}</a></li>
								{/each}
							</ul>
						</details>
					</li>
				{:else}
					<li><a href={children.path}>{children.displayName}</a></li>
				{/if}
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn">Button</a>
	</div>
</div>
