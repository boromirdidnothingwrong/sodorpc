<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	import Carousel from '$lib/components/Carousel.svelte';
	import '$lib/app.pcss';
</script>

<p>Welcome to the bloody homepage</p>
<div id="carousel">
	<Carousel {data} />
</div>
