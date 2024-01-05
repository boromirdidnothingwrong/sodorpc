<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<div class="w-full h-full p-3 overflow-auto mx-auto px-8">
	<p>Welcome to the homepage</p>

	<div class="columns-2">
		<p>Well, let me tell you something, ...</p>
		<p class="break-after-column isolate">Sure, go ahead, laugh...</p>
		<p class="isolate">Maybe we can live without...</p>
		<p>Look. If you think this is...</p>
	</div>
	<Carousel {data} />
</div>
