<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
	<aside>
		<p>{config.title} &copy {new Date().getFullYear()}</p>
	</aside>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}
	p {
		color: var(--text-2);
	}
</style>
