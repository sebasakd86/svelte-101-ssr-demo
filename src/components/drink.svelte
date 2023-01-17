<script>
	export let drink;
</script>

<div class="p-4 flex flex-col gap-4">
	<div class="flex items-center justify-start gap-2">
		<div class="flex w-40 h-40">
			<img src={drink.strDrinkThumb} alt="Drink" class="rounded-full" />
		</div>
		<div class="flex-1">
			<h1 class="text-2xl">{drink.strDrink}</h1>
			<h6 class="text-xl">{drink.strCategory}</h6>
		</div>
	</div>
	<div class="max-w-md">
		<span>{drink.strInstructions}</span>
	</div>
</div>
