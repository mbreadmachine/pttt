<script>
	import * as Alert from '$lib/components/ui/alert/index.js';
    import { Carta, Markdown } from 'carta-md';
    import DOMPurify from 'isomorphic-dompurify';
    import { imsize } from 'carta-plugin-imsize';

    let carta = new Carta({sanitizer: DOMPurify.sanitize, extensions: [imsize()]});

	let { data } = $props();
</script>

<svelte:head>
    <title>pttt - {data.result.name}</title>
</svelte:head>

<div class="m-2">
	<Alert.Root variant="destructive">
		<Alert.Title>Do you feel that this article is outdated or missing something?</Alert.Title>
		<Alert.Description
			>If you think so, please <a
				href="https://github.com/mbreadmachine/pttt/issues/new?assignees=Marcus1YouTube&labels=place+update&projects=&template=place-update-request.md"
				target="_blank"
				class="link">open an issue</a
			>
			on Github, or alternatively you can fill out
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdt9UzwyrnQdcQKFp5bEocrxfpTiLitpCZ4730bS7TA8A99lQ/viewform" target="_blank" class="link">this Google form</a>.</Alert.Description
		>
	</Alert.Root>
    <div class="flex flex-col items-center justify-center">
        <div class="mt-2 md:w-2/4 block items-center justify-center">
            <div class="border-b-2 border-gray mb-20">
                <h1>{data.result.name}</h1>
                <h2>{data.result.country}</h2>
            </div>
            <div>
                <Markdown {carta} value={data.result.body} />
            </div>
        
        </div>
    </div>
</div>
