<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>pttt - OOPS! An error</title>
</svelte:head>

<div class=" flex items-center justify-center">
	<div
		class="mt-2 grid w-full max-w-4xl grid-cols-1 items-center justify-center gap-2 md:grid-cols-2"
	>
		<div class="text-center">
			<h1>EEEK! A HTTP code {$page.status} occurred.</h1>
			<code>{$page.error.message}</code>
			<a onclick={history.back()} class="link cursor-pointer">Go back</a>
		</div>
		<div>
			<img
				src={'https://http.cat/' + $page.status}
				alt={'A funny image of a cat representing the HTTP code ' + $page.status}
                class="w-full"
			/>
		</div>
	</div>
</div>
