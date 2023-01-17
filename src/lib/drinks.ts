// To fetch from somewhere.
export const GetRandomDrink = async () => {
	const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
	return await res.json();
};
