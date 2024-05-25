import { ReactNode } from "react";

const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={`container  ${!className ? "" : className}`}>
			{children}
		</div>
	);
};

export default Container;
