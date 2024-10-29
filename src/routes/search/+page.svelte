<script>
    import { ResultCard} from "$lib/components/ui/resultcard/index.js"

    let { data } = $props()
</script>

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