<script lang="ts">
	import * as config from '$lib/config';
	const projectName: string = 'sodorPC';
	export let data;
	import Logo from '$lib/logo.svelte';
</script>

<div class="navbar bg-base-100">
	<img class="navbar-start" />
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
	</div>
	<a href="/"><Logo /></a>
</div>
<div class="navbar-center hidden lg:flex"></div>
<div class="navbar-end">
	<label class="cursor-pointer grid place-items-center">
		<input
			type="checkbox"
			value="dark"
			class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
		/>
		<svg
			class="col-start-1 row-start-1 stroke-base-100 fill-base-100"
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><circle cx="12" cy="12" r="5" /><path
				d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
			/></svg
		>
		<svg
			class="col-start-2 row-start-1 stroke-base-100 fill-base-100"
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
		>
	</label>
</div>

<!--<header>
	<nav>
		<table>
			<tbody>
				{#each data.children as children}
					<tr><div class="topnavlink"><a href={children.path}>{children.displayName} </a></div></tr>
				{/each}
			</tbody>
		</table>
	</nav>
</header>-->
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
