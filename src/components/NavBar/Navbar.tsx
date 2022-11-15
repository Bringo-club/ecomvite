import { useTranslation } from "react-i18next";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import Button from "../UI/Buttons/Button";
import NavLinks from "./NavLinks";

const Navbar:React.FC = () => {

	const { t } = useTranslation();

	return (
		<div className="container">
			<div className="flex items-center justify-between px-4 lg:px-0">
				<Button label={t("getStarted")} className="hidden lg:block" />
				<NavLinks />
				<LogoIcon />
			</div>
		</div>
	);
};

export default Navbar;