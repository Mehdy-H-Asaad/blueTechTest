import { useParams } from "react-router-dom";
import getProductsSWR from "../api/getProductsSWR";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addToCart, updateItemQuantity } from "../redux/CartSlice";
import { productsProps } from "../../types/Products";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = () => {
	const productId = useParams();
	const { products, error, isValidating } = getProductsSWR();
	const [quantityInput, setQuantityInput] = useState<number>(1);
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = (e: any) => {
		setQuantityInput(e.target.value);
	};

	if (error) return <div>Error</div>;
	if (isValidating)
		return (
			<div className="text-center mt-3 text-4xl text-[#0D6EFD] font-bold">
				Loading...
			</div>
		);
	if (!products) return <div>No products available</div>;
	const selectedItem = products.find(
		(ele: productsProps) => ele.id === Number(productId.id)
	);

	if (!selectedItem) return <div>The item is not found</div>;

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				id: selectedItem.id,
				quantity: quantityInput,
				image: selectedItem.image,
				price: selectedItem.price,
				title: selectedItem.title,
				description: selectedItem.description,
			})
		);
		addedSuccessfully();
	};

	const handleUpdateCart = () => {
		dispatch(
			updateItemQuantity({
				id: selectedItem.id,
				quantity: quantityInput,
			})
		);
		updatedSuccefully();
	};

	const addedSuccessfully = () => toast.success("Successfully Added!");
	const updatedSuccefully = () => toast.success("Updated the quantity!");
	return (
		<section className="mt-20">
			{selectedItem && (
				<div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-center gap-16 lg:gap-32 ">
					<img
						src={selectedItem.image}
						width={300}
						height={200}
						alt="ProductImg"
						className="mx-auto lg:mx-0"
					/>
					<div className="ml-10">
						<h1 className="font-bold text-2xl max-w-[500px]">
							{selectedItem.title}
						</h1>
						<span className="font-[600] text-lg">{selectedItem.price}$</span>
						<p className="max-w-[500px] text-gray-500 my-2">
							{selectedItem.description}
						</p>
						<div className="flex flex-col mt-6">
							<label className="font-[600] mb-2">Quantity:</label>
							<input
								type="number"
								className="border-[#dddddd] border-[1px] outline-none mb-4 px-4 rounded-full h-[35px] w-1/2"
								value={quantityInput}
								onChange={handleChange}
							/>
						</div>
						<div className="flex mt-10">
							<button
								onClick={handleAddToCart}
								className="bg-black p-4 uppercase font-bold text-white"
							>
								Add to cart
							</button>
							<button
								onClick={handleUpdateCart}
								className="bg-[#faedeb] p-4 uppercase font-bold ml-4 text-black"
							>
								update quantity
							</button>
						</div>
					</div>
				</div>
			)}
			<Toaster />
		</section>
	);
};

export default SingleProduct;
