<script lang="ts">
	import '../app.pcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import logo from '$lib/images/logo.png';
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
				><img
					src={logo}
					alt="Sodor Parish Council logo"
					style="width: auto; height: 50px"
				/></svelte:fragment
			>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"
		><div style="text-align: center;"></div>
		Page Footer</svelte:fragment
	>
	<!-- (footer) -->
</AppShell>
