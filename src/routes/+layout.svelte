<script lang="ts">
	import '../app.pcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import logo from '$lib/images/logo.png';
	import { fetchAccessToken, projectURL } from '$lib/server/baseStuff.js';
	

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch, params, route}){
  let token = await fetchAccessToken();
  let bearer = `bearer ${token}`
      const rootNodeRes = await fetch(`${projectURL}/nodes/root`, { headers : { 'Authorization': `${bearer}`}});
      const rootNodeData = await rootNodeRes.json();
      console.log("Root node data:" + JSON.stringify(rootNodeData));
      return rootNodeData
</script>

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
				Render all the menu items here, and possibly the logic which shows what submenu you're
				currently looking at
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
