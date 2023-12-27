<script lang="ts">
	import '$lib/app.pcss';
	import type { LayoutServerData } from './$types';
	import logo from '$lib/images/logo.png';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	export let data: LayoutServerData;
</script>

<Header {data}></Header>
<main>
	<slot />
</main>
<Footer></Footer>

<!--
Layout.svelte is like a wrapper. Stuff like headers, footers etc that are on every page. Data for
here is imported from +layout.server.js and is accessible to: The page for this route, which
doesn't use it Any sub layouts (effectively adds a second layer of wrapping _inside_ this one) We
don't have either here! So that makes it a bit easier
-->
