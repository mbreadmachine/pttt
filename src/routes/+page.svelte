<script>
	import { Carta, Markdown } from "carta-md"
	import DOMPurify from "isomorphic-dompurify";
	import Button from './../lib/components/ui/button/button.svelte';

	let carta = new Carta({
		sanitizer: DOMPurify.sanitize,
	});

	export let data
</script>

<svelte:head>
	<title>PTTT - Home</title>
</svelte:head>
<Button onclick={() => console.log('click')}>Test button</Button>

<!-- id, name, alsoknown, country, type, body -->
{#each data.results as place}
	<p>{place.name}</p>
	<div class="border border-black markdown">
		<Markdown {carta} value={place.body} />
	</div>
{/each}