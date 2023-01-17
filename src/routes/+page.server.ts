import { GetRandomDrink } from '$lib/drinks';

// To run on the server.
export const load = async ({ fetch, request }) => {
	const drink = await GetRandomDrink();
	return drink.drinks[0];
};
