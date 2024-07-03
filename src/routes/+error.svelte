<script>
    import { page } from "$app/stores";
</script>

<h1>OOPS! A HTTP code {$page.status} occured.</h1>
<code>{$page.error.message}</code>
<a href="/">Return home</a>