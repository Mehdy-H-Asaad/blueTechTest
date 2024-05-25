import Container from "./Container";
import closeCartImg from "../../public/assets/imgs/closeCart.png";
import Menu from "../../public/assets/imgs/menu.png";
import { Link } from "react-router-dom";
import Germany from "../../public/assets/imgs/DE@2x.png";
import Arrow from "../../public/assets/imgs/Vector.png";
import { useState } from "react";

const SubNavbar = () => {
	const [isSubNavbarOpen, setIsSubNavbarOpen] = useState<boolean>(false);

	const subNabvarLinks = [
		"All category",
		"Hot offers",
		"Gift boxes",
		"Projects",
		"Menu item",
		"Help",
	];

	return (
		<section className="py-4 border-b border-[#33333326] bg-white">
			<Container className="flex items-center justify-between gap-11">
				<div className="flex items-center gap-4 flex-1">
					<img
						src={Menu}
						className="block lg:hidden"
						onClick={() => setIsSubNavbarOpen(true)}
					/>
					{subNabvarLinks.map((ele: string, index: number) => {
						return (
							<Link
								key={index}
								className="hidden lg:block text-[16px] font-[500] "
								to={"/"}
							>
								{ele}
							</Link>
						);
					})}
				</div>

				<div className="hidden lg:flex items-center gap-3 font-[500]">
					<p>English, USD</p>
					<img src={Arrow} alt="" />
				</div>

				<div className="flex items-center gap-4">
					<div className="flex items-center gap-3">
						<p className="font-[500]">Ship to</p>
						<img src={Germany} alt="" />
					</div>
					<img src={Arrow} />
				</div>
			</Container>

			{isSubNavbarOpen && (
				<div
					className="fixed inset-0 bg-black opacity-50 z-20"
					onClick={() => setIsSubNavbarOpen(false)}
				></div>
			)}

			<div
				className={`duration-700 ease-out fixed top-0 transition-all ${
					isSubNavbarOpen ? "left-0" : "-left-full"
				} w-full md:w-[300px] h-screen bg-white p-5 z-30`}
			>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-[#0D6EFD]">Important links</h1>
					<img
						src={closeCartImg}
						alt=""
						className="size-5 cursor-pointer "
						onClick={() => setIsSubNavbarOpen(false)}
					/>
				</div>
				<div className="flex flex-col gap-6 mt-4">
					{subNabvarLinks.map((ele: string, index: number) => {
						return (
							<Link
								key={index}
								className="text-sm text-[#8B96A5] mt-2 font-[500] pb-3 border-b "
								to={"/"}
							>
								{ele}
							</Link>
						);
					})}
					<div className="flex items-center gap-3 font-[500]">
						<p className="text-sm text-[#8B96A5] mt-2 font-[500] pb-3">
							English, USD
						</p>
						<img src={Arrow} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SubNavbar;
