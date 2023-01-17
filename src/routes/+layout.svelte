<script>
	import '../app.css';
</script>

<div class="flex flex-col">
	<nav class="w-full bg-slate-300 p-2">
		<a prefecth href="/">Home</a>
	</nav>
	<div class="h-full p-2">
		<slot />
	</div>
	<footer class="w-full bg-slate-300 p-2">
		<span>Copyright</span>
	</footer>
</div>
