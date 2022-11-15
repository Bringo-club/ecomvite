import { useTranslation } from "react-i18next";
import { ReactComponent as BoxIcon } from "../../../assets/icons/box.svg";
import { ReactComponent as CartIcon } from "../../../assets/icons/cart.svg";
import { ReactComponent as CashIcon } from "../../../assets/icons/cash.svg";
import { ReactComponent as ChatIcon } from "../../../assets/icons/chat.svg";
import { ReactComponent as PromoteIcon } from "../../../assets/icons/promote.svg";
import { ReactComponent as UsersIcon } from "../../../assets/icons/users.svg";

const FeaturesSection: React.FC = () => {

	const { t } = useTranslation();

	const featuresTitles: string[] = t("featuresSection.features", { returnObjects: true });

	const featuresIcons: JSX.Element[] = [
		<PromoteIcon />,
		<CartIcon />,
		<BoxIcon />,
		<CashIcon />,
		<ChatIcon />,
		<UsersIcon />,
	];

	return (
		<div className="container py-20">
			<h2 className="text-center text-2xl lg:text-4xl font-bold text-dark-green">{t("featuresSection.header")}</h2>
			<div className="flex flex-wrap mt-11 justify-end px-4 lg:px-0">
				{
					featuresTitles.map((title: string, index: number) => (
						<FeatureItem key={index} feature={{title, icon: featuresIcons[index]}} />
					)) 
				}
			</div>
		</div>
	);
};

export default FeaturesSection;

const FeatureItem: React.FC<{ feature: IFeature }> = ({ feature }) => {

	const { icon, title } = feature;

	return (
		<div className="lg:basis-1/2 text-right flex lg:items-center justify-end mb-8 gap-4">
			<span className="text-grey text-xl">{title}</span>
			{ icon }
		</div>
	);
}
