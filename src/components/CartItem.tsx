import { useDispatch } from "react-redux";
import { productsProps } from "../../types/Products";
import { AppDispatch } from "../redux/store";
import { removeFromCart } from "../redux/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({
	id,
	image,
	title,
	price,
	quantity,
	description,
}: productsProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const removeToast = () => toast.error("Removed from cart");

	const handleRemoveFromCart = () => {
		dispatch(
			removeFromCart({
				id,
				image,
				price,
				quantity,
				title,
				description,
			})
		);
		removeToast();
	};

	return (
		<li className="flex py-6">
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
				<img
					src={image}
					alt="Salmon orange fabric pouch with match zipper, #342626 zipper pull, and adjustable hip belt."
					className="h-full w-full object-cover object-center "
					height={100}
					width={100}
				/>
			</div>
			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>{title}</h3>
						<p className="ml-4 font-bold">{price}$</p>
					</div>
				</div>
				<div className="flex flex-1 items-end justify-between text-sm">
					<p className="text-gray-500">
						Quantity: {quantity} * {price}
					</p>
					<div className="flex">
						<button
							onClick={handleRemoveFromCart}
							type="button"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
