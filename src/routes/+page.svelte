<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Button from './../lib/components/ui/button/button.svelte';

	export let data
</script>
<Button on:click={() => console.log('click')}>Test button</Button>

<!-- id, name, alsoknown, country, type, body -->
{#each data.results as place}
	<p>{place.name}</p>
	<div class="border border-black markdown">
		<SvelteMarkdown source={place.body} />
	</div>
{/each}