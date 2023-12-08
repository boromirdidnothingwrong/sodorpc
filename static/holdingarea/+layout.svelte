<script lang="ts">
	import '../app.pcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import logo from '$lib/images/logo.png';
	import type { LayoutData } from '../../src/routes/$types';
	import accessToken from './server/fetchaccesstoken from '$lib/projectVariables';
	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	export async function load({ fetch }) {
		// Again, the next two are a mucky way about it. If we can pass it cleaned up down from baseStuff.ts then we'll be grand
		// Until then we import the object and process it per file
		let bearer = `bearer ${accessToken}`;
		console.log(`The bearer looks like this? ${bearer}`);
		console.log(pVars.projectURL);
		const rootNodeRes = await fetch(`${pVars.projectURL}/nodes/root?depth=3`, {
			headers: { Authorization: `${bearer}` }
		});
		const rootNodeData = await rootNodeRes.json();
		return rootNodeData;
	}
	export let data../../src/routes/$types.js;
</script>

<!--
Layout.svelte is like a wrapper. Stuff like headers, footers etc that are on every page. Data for
here is imported from +layout.server.js and is accessible to: The page for this route, which
doesn't use it Any sub layouts (effectively adds a second layer of wrapping _inside_ this one) We
don't have either here! So that makes it a bit easier
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
				{data}
				<!--{#each data.item.children as child}
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
