import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const NavLinks: React.FC = () => {
	const { t } = useTranslation();

	const [openBurger, setOpenBurger] = useState(false);

	const handleBurger = () => {
		setOpenBurger(!openBurger);
	};

	return (
		<>
			<div className="hidden lg:flex">
				<NavLinksItems />
			</div>

			{ !openBurger && <BurgerIcon className="lg:hidden h-14 w-14" onClick={handleBurger} />}
			{ openBurger && <CloseIcon className="lg:hidden h-14 w-14" onClick={handleBurger} />}

			{openBurger && (
				<div className="flex flex-col absolute bg-black w-full top-16">
					<NavLinksItems />
				</div>
			)}
		</>
	);
};

export default NavLinks;

const LinkItem: React.FC<{
	to: string;
	label: string;
	className?: string;
	isActivated?: boolean;
}> = ({ to, label, className, isActivated }) => {
	return (
		<Link
			to={to}
			className={`text-dark-green text-center py-4 lg:py-10 relative lg:mx-7 ${className}`}
		>
			{label}
		</Link>
	);
};

const NavLinksItems: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<LinkItem to="/#" label={t("home")} />
			<LinkItem to="/#" label={t("about")} />
			<LinkItem to="/#" label={t("features")} />
		</>
	);
};
