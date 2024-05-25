import Container from "../components/Container";
import HeroImg from "../../public/assets/imgs/Banner-board-800x420 2.png";
import Avatar from "../../public/assets/imgs/Avatar.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
	const [isActive, setIsActive] = useState<number>(0);

	const handleClick = (num: number) => {
		setIsActive(num);
	};

	const categories = [
		"Automobiles",
		"Clothes and wear",
		"Home interiors",
		"Computer and tech",
		"Tools, equipment",
		"Soprts and outdoor",
		"Animal and pets",
		"Machinery tools",
		"More category",
	];
	return (
		<section className="mt-5 ">
			<Container>
				<div className="flex items-center bg-white border border-[#DEE2E7] justify-between rounded-md px-2 py-5 flex-wrap  xl:justify-evenly lg:px-0 md:gap-3 lg:gap-0">
					<div className="flex-1 lg:flex-[0] mb-4 lg:mb-0">
						{categories.map((ele: string, index: number) => {
							return (
								<div
									onClick={() => handleClick(index)}
									className={`${
										isActive === index
											? "cursor-pointer h-[40px] p-[10px] rounded-md bg-[#E5F1FF] w-full lg:w-[250px]"
											: "cursor-pointer h-[40px] p-[10px] rounded-md duration-300 hover:bg-[#E5F1FF] w-full lg:w-[250px]"
									}`}
									key={index}
								>
									{ele}
								</div>
							);
						})}
					</div>
					<div className="relative">
						<img src={HeroImg} alt="" />
						<div className="absolute top-0 p-5 md:p-10">
							<p className="text-[14px] md:text-[28px]">Latest trending</p>
							<p className="text-[18px] font-[700]">Electronic items</p>
							<Link
								className="bg-white text-black py-1 px-5 rounded-md font-[500] block w-fit mt-4"
								to={"/"}
							>
								Learn more
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3 px-[10px] mt-5 mx-auto xl:mt-0 md:mx-0 w-full xl:w-fit">
						<div className="bg-[#E3F0FF] xl:w-[200px] h-[150px] flex flex-col justify-around w-full rounded-md px-3">
							<div className="flex items-center justify-center gap-3 ">
								<img src={Avatar} alt="" />
								<p className="max-w-28">Hi, user let’s get stated</p>
							</div>

							<div className="bg-[#0D6EFD] w-full text-white h-[30px] flex items-center justify-center rounded-md mx-auto">
								Join now
							</div>
							<div className="bg-white text-[#0D6EFD] w-full h-[30px] flex items-center justify-center rounded-md mx-auto">
								Login in
							</div>
						</div>

						<div className="bg-[#F38332] text-white w-full xl:w-[200px] h-24 flex items-center rounded-md justify-center xl:justify-start">
							<p className="max-w-[144px] p-4">
								Get US $10 off with a new supplier
							</p>
						</div>

						<div className="bg-[#55BDC3] text-white w-full xl:w-[200px] h-24 flex items-center rounded-md justify-center xl:justify-start">
							<p className="max-w-[144px] p-4">
								Send quotes with supplier preferences
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
