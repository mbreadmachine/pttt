<script>
    import * as Card from "$lib/components/ui/card/index.js"

    let { data } = $props()
</script>

<a href={`/details/${data.id}`}>
    <Card.Root>
        <Card.Header>
            <Card.Title>{data.name} <i>{data.country ? "- " + data.country : ""}</i></Card.Title>
            <Card.Description><i>{data.type}</i> | Also known as <b>{data.alsoknown}</b></Card.Description>
        </Card.Header>
        <Card.Footer>
            
        </Card.Footer>
    </Card.Root>
</a>
