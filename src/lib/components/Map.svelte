<script lang="ts">
	export let url: string;
	export let height: string;
	export let width: string;
	let modifiedurl: string;

	if (width.length != 0) {
		modifiedurl = url.replace(/width="(.*?)"/, 'width=' + width + '" ');
	} else {
		modifiedurl = url.replace(/width="(.*?)"/, 'width=' + '100%' + '" ');
	}

	modifiedurl = url.replace(/height="(.*?)"/, 'height=' + height + '" ');
</script>

{@html modifiedurl}

<!--
screens: 'sm': '640px', 'md': '768px', 'lg':'1024px', 'xl': '1280px', '2xl':'1536px', -->
