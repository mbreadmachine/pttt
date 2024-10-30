<script>
    import { ResultCard} from "$lib/components/ui/resultcard/index.js"

    let { data } = $props()
</script>

<svelte:head>
	<title>Search and Discover - pttt</title>
    <meta name="description" content="Search for public transport tickets and more" />
    <meta name="og:title" content="Discover all articles on Public Transport Ticket Tracker" />
</svelte:head>

{#if data != []}
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        {#each data.results as card}
            <ResultCard data={card} />
        {/each}
    </div>
{:else}
    <div>
        <h1>No results found!</h1>
    </div>
{/if}