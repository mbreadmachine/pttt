<script>
	import '../app.css';

	let { children } = $props();
</script>

<header>
	<div class="border-grey sticky ml-2 mr-2 flex h-16 items-center gap-4 border-b-2">
		<a href="/">
			<h1>pttt</h1>
		</a>
		<nav class="flex h-full w-full items-center justify-between text-lg">
			<div>
				<a class="navlink" href="/search">Search</a>
				<a class="navlink" href="/donate">Donate</a>
			</div>
			<div class="flex gap-3">
				<a href="https://ko-fi.com/breadmachine" target="_blank"
					><img src="/kofi.svg" alt="Support me on Ko-fi" class="h-8 w-8" /></a
				>
				<a href="https://github.com/mbreadmachine/pttt" target="_blank" class="github"
					><img src="/github-mark.svg" alt="Star my project on Github" class="h-8 w-8" /></a
				>
			</div>
		</nav>
	</div>
</header>
<main>
	{@render children()}
</main>
<footer></footer>
