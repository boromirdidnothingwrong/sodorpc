<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<div class="w-full h-full p-3 overflow-auto mx-auto px-8">
	<p>Welcome to the homepage</p>

	<Carousel {data} />
</div>
