import closeCartImg from "../../public/assets/imgs/closeCart.png";
import { IoIosSearch } from "react-icons/io";
import FavortieItemsImg from "../../public/assets/imgs/Favorite.png";
import CartItemImg from "../../public/assets/imgs/Cart.png";
import UserImg from "../../public/assets/imgs/User.png";
import MessagesImg from "../../public/assets/imgs/Messages.png";
import { SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type ResponsiveNavbaProps = {
	setIsCartVisible: (e: SetStateAction<boolean>) => void;
	setIsMenuVisible: (e: SetStateAction<boolean>) => void;
	isMenuVisible: boolean;
	isCartVisible: boolean;
};

const ResponsiveNavbar = ({
	setIsCartVisible,
	setIsMenuVisible,
	isMenuVisible,
	isCartVisible,
}: ResponsiveNavbaProps) => {
	const cartItems = useSelector((state: RootState) => state.cartItems.cart);
	const navActions = [
		{
			title: "Profile",
			img: UserImg,
		},
		{
			title: "Message",
			img: MessagesImg,
		},
		{
			title: "Orders",
			img: FavortieItemsImg,
		},
		{
			title: "My cart",
			img: CartItemImg,
			onclick: () => {
				setIsCartVisible(!isCartVisible);
				setIsMenuVisible(false);
			},
		},
	];
	return (
		<div
			className={`duration-500 ease-out fixed top-0 transition-all ${
				isMenuVisible ? "right-0" : "-right-[100%]"
			} w-full md:w-[300px] h-screen bg-white p-5 z-30`}
		>
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-bold text-[#0D6EFD]">Menu</h1>
				<img
					src={closeCartImg}
					alt=""
					className="size-5 cursor-pointer"
					onClick={() => setIsMenuVisible(false)}
				/>
			</div>
			<div className="flex flex-col gap-6 mt-4 items-start">
				{navActions.map(ele => {
					return (
						<>
							{ele.title == "My cart" ? (
								<div
									onClick={ele.onclick}
									key={ele.title}
									className="flex flex-col relative justify-center cursor-pointer w-full items-start border-b pb-3"
								>
									<img src={ele.img} alt="" width={20} />
									<span className="text-xs text-[#8B96A5] mt-2 font-[400]">
										{ele.title}
									</span>
									<span className="absolute font-bold text-sm size-3 bg-[#0D6EFD] rounded-[50%] text-white p-[10px] flex items-center justify-center left-3 -top-2">
										{cartItems.length}
									</span>
								</div>
							) : (
								<div
									onClick={ele.onclick}
									key={ele.title}
									className="border-b pb-3 flex flex-col justify-center cursor-pointer w-full items-start"
								>
									<img src={ele.img} alt="" width={20} />
									<span className="text-xs text-[#8B96A5] mt-2 font-[400]">
										{ele.title}
									</span>
								</div>
							)}
						</>
					);
				})}
				<div className="flex items-center gap-3 cursor-pointer md:hidden w-full">
					<IoIosSearch size={25} className="text-[#8B96A5]" />
					<div className="flex items-center w-full gap-3">
						<input
							type="text"
							placeholder="Search"
							className="outline-none border-none bg-transparent text-sm w-full"
						/>
						<span className="py-2 px-5 text-sm font-bold bg-[#0D6EFD] text-white rounded-md">
							Search
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResponsiveNavbar;
