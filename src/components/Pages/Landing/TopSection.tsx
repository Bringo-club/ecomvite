import { useTranslation } from "react-i18next";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import Button from "../../UI/Buttons/Button";

const TopSection: React.FC = () => {
	const { t } = useTranslation();

	const features: string[] = t("topSection.features", { returnObjects: true });

	return (
		<div className="container flex flex-wrap lg:flex-row flex-col-reverse items-center py-8">
			<div className="lg:basis-1/2">
				<img src="/imgs/topSection.png" alt="sms texting" />
			</div>
			<div className="lg:basis-1/2 text-right px-4 flex flex-col justify-center">
				<h1 className="font-bold text-2xl lg:text-4xl text-dark-green">{t("topSection.header")}</h1>
				<h2 className="text-light-green text-lg lg:text-2xl font-bold my-6">{t("topSection.subHeader")}</h2>
				<ul>
					{features.map((feature: string, index: number) => (
						<li key={index} className="text-dark-green flex justify-end gap-2 mb-2 text-sm lg:text-base">
							{feature}
							<CheckIcon className="min-w-[24px]" />
						</li>
					))}
				</ul>
				<Button
					icon={<ArrowIcon />}
					label={t("topSection.button")}
					className="ml-auto mt-6"
				/>
			</div>
		</div>
	);
};

export default TopSection;
