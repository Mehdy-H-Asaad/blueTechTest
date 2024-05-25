import Container from "../components/Container";
import { Link } from "react-router-dom";
import getProductsSWR from "../api/getProductsSWR";
const DealsAndOffers = () => {
	const { products, error, isValidating } = getProductsSWR();

	if (error) return <div>ERROR</div>;
	if (isValidating)
		return (
			<div className="text-center mt-3 text-4xl text-[#0D6EFD] font-bold">
				Loading...
			</div>
		);
	if (!products) return <div>No products found</div>;
	return (
		<section className="my-[30px]">
			<Container>
				<div className="flex border border-[#DEE2E7] bg-white flex-col md:flex-row justify-between">
					<div className="flex-1 flex flex-col justify-center px-5 border-r border-[#DEE2E7] mx-auto my-5 md:mx-0 md:mt-0 ">
						<p className="text-xl font-[600] -tracking-[0.2px] ">
							Deals and offers
						</p>
						<h5 className="text-[#8B96A5]">Hygiene equipments</h5>
					</div>
					<div className="flex flex-[3] flex-wrap justify-center md:justify-start lg:justify-between">
						{products.slice(0, 5).map((ele: any) => {
							return (
								<Link key={ele.id} to={`/${ele.id}`}>
									<div className="xl:border-r xl:border-r-[#E0E0E0] ">
										<div className="flex flex-col items-center p-4 ">
											<img
												src={ele.image}
												alt=""
												className="mb-3 w-[118px] max-h-[150px] h-[150px]"
											/>
											<span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[112px]">
												{ele.title}
											</span>
											<h1 className="mt-2 bg-[#FFE3E3] text-[#EB001B] text-sm font-[500] px-2 py-1 rounded-[29px]">
												${ele.price}
											</h1>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</Container>
		</section>
	);
};
export default DealsAndOffers;
