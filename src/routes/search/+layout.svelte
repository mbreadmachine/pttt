<script>
	import { Input } from '$lib/components/ui/input/index.js';
    import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';

	let { children } = $props();

	let searchTerm = $state('');

    let timer

    $effect(() => {
        searchTerm = $page.params.query
    })

	const keySearch = (e) => {
		if (e.key == "Enter") search()
	}

    const search = () => {
    	if (searchTerm == "" && $page.params.query == undefined) return
    	if (searchTerm == " ") return
		document.location.href = `/search/${searchTerm}`
    }
</script>

<svelte:head>
	<title>pttt - Search and Discover</title>
</svelte:head>

<div class="mt-2 flex items-center justify-center">
	<div class="w-10/12 md:w-2/4 flex gap-2">
		<Input bind:value={searchTerm} onkeydown={keySearch} placeholder="Search for a station or a route" />
		<Button onclick={search}>Search</Button>
	</div>
</div>

<div class="m-2">
	{@render children()}
</div>
