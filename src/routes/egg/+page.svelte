<script>
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const minLength = 3;
	const maxLength = 5;

	const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

	let randomLetters = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * alphabet.length);
		randomLetters += alphabet[randomIndex] + ' ';
	}
	console.log(randomLetters);
</script>

<div>
	<h1>{randomLetters}</h1>
</div>
