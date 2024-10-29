<script>
    import { ResultCard } from "$lib/components/ui/resultcard/index.js"
    import { page } from '$app/stores';

    let { data } = $props()
</script>

<svelte:head>
    <title>pttt - Results for "{$page.params.query}"</title>
</svelte:head>

{#if data.results == []}
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        {#each data.results as card}
            <ResultCard data={card} />
        {/each}
    </div>
{:else}
    <div class="text-center">
        <h1>No results found!</h1>
    </div>
{/if}