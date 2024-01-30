<script lang="ts">
	import type { PageServerData } from './$types';
	import StandardPage from '$lib/components/StandardPage.svelte';
	export let data: PageServerData;
	import Carousel from '$lib/components/Carousel.svelte';
	import FullWidthImageCarousel from '$lib/components/FullWidthImageCarousel.svelte';
</script>

<div class="w-full h-full p-3 overflow-auto mx-auto px-8">
	<StandardPage {data} />
	<FullWidthImageCarousel {data} />
	<Carousel {data} />
</div>
