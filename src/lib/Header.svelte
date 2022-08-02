<script>
	export let name = "Alessandro";

	const now = new Date();
	let start;
	
	if (now.getHours() < 16 && now.getHours() > 6) {
		start = "Buongiorno";
	} else {
		start = "Buonasera";
	}
	let greeting = `${start}, ${name}`;

</script>

<header>
	<p class="text-4xl m-0 py-8 font-extrabold">{greeting}</p>
</header>