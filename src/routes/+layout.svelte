<script>
	import '../app.pcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<slot />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
