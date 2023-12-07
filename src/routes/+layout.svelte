<script lang="ts">
	import '../app.pcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import logo from '$lib/images/logo.png';
	import type { LayoutServerData } from './$types';
	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	export let data: LayoutServerData;
	let tempdata: string = JSON.stringify(data);
	console.log(`This is the layout.svelte data ${tempdata}`);
</script>

<!--
Layout.svelte is like a wrapper. Stuff like headers, footers etc that are on every page. Data for
here is imported from +layout.server.js and is accessible to: The page for this route, which
doesn't use it Any sub layouts (effectively adds a second layer of wrapping _inside_ this one) We
don't have either here! So that makes it a bit easier */
-->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="bg-#285F32"
		>
			<svelte:fragment slot="lead"
				><img src={logo} alt="Sodor Parish Council logo" /></svelte:fragment
			>
			<p>
				<!--{#each data.children as child}
					<p>{child}</p>
				{/each}-->
			</p>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
