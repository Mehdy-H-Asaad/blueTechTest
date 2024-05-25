import useSWR from "swr";
import { productsProps } from "../../types/Products";
const fetcher = (url: string) => fetch(url).then(res => res.json());

const getProductsSWR = () => {
	const { data, error, isValidating } = useSWR<productsProps[]>(
		"https://fakestoreapi.com/products",
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	return {
		products: data,
		error,
		isValidating,
	};
};

export default getProductsSWR;
