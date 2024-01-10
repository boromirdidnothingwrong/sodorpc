<script lang="ts">
	import type { PageServerData } from './$types';
	import StandardPage from '$lib/components/StandardPage.svelte';
	export let data: PageServerData;
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<div class="w-full h-full p-3 overflow-auto mx-auto px-8">
	<StandardPage {data} />

	<Carousel {data} />
</div>
