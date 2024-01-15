<script lang="ts">
	import NewsPageCarousel from '$lib/components/newsPageCarousel.svelte';
	export let data;

	console.log('News page data: ' + JSON.stringify(data));
</script>

<NewsPageCarousel {data} />
