<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	// <ul>
	// 	<li>Tickets and passes</li>
	// 	<li>Smartcards</li>
	// 	<li>Mobile tickets and apps</li>
	// 	<li>And even contactless payments!</li>
	// </ul>
	let cards = [
		{
			title: "Tickets and passes",
			description: "The price of tickets and passes for your next trip"
		},
		{
			title: "Smartcards",
			description: "Loading your tickets and passes onto your smartcard"
		},
		{
			title: "Mobile tickets and apps",
			description: "Using your smartphone to buy tickets and passes and validating them"
		},
		{
			title: "Contactless payments",
			description: "Taking advantage of the new and easiest mode of payment for transport"
		}
	]
</script>

<svelte:head>
	<title>Public Transport Ticket Tracker</title>
	<meta name="description" content="The public transport fare info aggregator you have been waiting for" />
	<meta name="og:title" content="Public Transport Ticket Tracker" />
	<meta name="og:type" content="website" />
	<meta name="og:url" content="https://pttt.vercel.app/" />
	<meta name="og:locale" content="en_US" />
</svelte:head>

<div class="flex flex-col items-center mt-2">
	<h1 class="text-center">The public transport fare info aggregator you have been waiting for</h1>
	<small class="text-gray-400">(or not)</small>
	<h2 class="mb-2">You can get info about:</h2>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each cards as card}
			<Card.Root>
				<Card.Header>
					<Card.Title>{card.title}</Card.Title>
				</Card.Header>
				<Card.Content>
					<Card.Description>{card.description}</Card.Description>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
	<div class="text-center mt-2 flex flex-col gap-2">
		<h2>And it's free and open source!</h2>
		<h3>Start exploring now!</h3>
		<Button href="/search">Go to search and discover</Button>
	</div>
</div>
