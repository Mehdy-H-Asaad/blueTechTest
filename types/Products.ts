export type productsProps = {
	id: number;
	title: string;
	image: string;
	price: number;
	quantity: number;
	description: string;
};

export type productsPropsActions = Omit<
	productsProps,
	"title" | "image" | "price" | "description"
>;
