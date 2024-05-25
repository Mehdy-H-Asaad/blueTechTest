import Container from "./Container";
import NavImg from "../../public/assets/imgs/logo-colored.png";
import FavortieItemsImg from "../../public/assets/imgs/Favorite.png";
import CartItemImg from "../../public/assets/imgs/Cart.png";
import UserImg from "../../public/assets/imgs/User.png";
import MessagesImg from "../../public/assets/imgs/Messages.png";
import { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Menu from "../../public/assets/imgs/menu.png";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type NavbarProps = {
	title: string;
	img: string;
	onclick?: () => void;
};

const Navbar = () => {
	const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
	const cartItems = useSelector((state: RootState) => state.cartItems.cart);
	const handleCartClick = () => {
		setIsCartVisible(!isCartVisible);
	};

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
		<nav className="h-[86px] flex items-center border-b border-[#33333326] bg-white ">
			<Container>
				<div className="flex items-center justify-between gap-14">
					<div>
						<Link to={"/"}>
							<img src={NavImg} alt="" />
						</Link>
					</div>
					<div className="hidden items-center border-2 border-[#0D6EFD] rounded-xl md:flex">
						<div className="w-full">
							<input
								type="text"
								placeholder="Search"
								className="outline-none border-none bg-transparent py-2 px-3 w-full lg:w-[400px]"
							/>
						</div>

						<div>
							<select className=" border-[#0D6EFD] border-l-[1px] py-2 px-3 outline-none bg-transparent">
								<option value="">All category</option>
								<option value="laptops">Laptops</option>
							</select>
						</div>

						<div>
							<button className="bg-[#0D6EFD] py-2 px-5 ml-3 text-white rounded-r-lg">
								Search
							</button>
						</div>
					</div>

					<div className="items-center gap-7 translate-y-1 hidden xl:flex">
						{navActions.map((ele: NavbarProps) => {
							return (
								<>
									{ele.title == "My cart" ? (
										<div
											onClick={ele.onclick}
											key={ele.title}
											className="flex flex-col relative justify-center items-center cursor-pointer"
										>
											<img src={ele.img} alt="" width={20} />
											<span className="text-xs text-[#8B96A5] mt-2 font-[400]">
												{ele.title}
											</span>
											<span className="absolute font-bold text-sm size-3 bg-[#0D6EFD] rounded-[50%] text-white p-[10px] flex items-center justify-center right-0 -top-2">
												{cartItems.length}
											</span>
										</div>
									) : (
										<div
											onClick={ele.onclick}
											key={ele.title}
											className="flex flex-col justify-center items-center cursor-pointer"
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
					</div>
					<img
						src={Menu}
						alt=""
						className="block xl:hidden cursor-pointer"
						onClick={() => setIsMenuVisible(true)}
					/>
				</div>
			</Container>
			{isCartVisible && (
				<Cart isCartVisible={isCartVisible} handleCartClick={handleCartClick} />
			)}

			{isMenuVisible && (
				<div
					className="fixed inset-0 bg-black opacity-50 z-20"
					onClick={() => setIsMenuVisible(false)}
				></div>
			)}

			<ResponsiveNavbar
				isCartVisible={isCartVisible}
				isMenuVisible={isMenuVisible}
				setIsCartVisible={setIsCartVisible}
				setIsMenuVisible={setIsMenuVisible}
			/>
		</nav>
	);
};

export default Navbar;
