<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<p>Welcome to the homepage</p>
<div id="carousel">
	<Carousel {data} />
</div>
