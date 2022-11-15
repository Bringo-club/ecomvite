import { useTranslation } from "react-i18next";
import { ReactComponent as Check2Icon } from "../../../assets/icons/check2.svg";

const HowWeHelpSection: React.FC = () => {
	const { t } = useTranslation();

	const howWeHelpsData: IHowWeHelp[] = t("HowWeHelpSection", {
		returnObjects: true,
	});

	return (
		<div className="container py-16">
			{howWeHelpsData.map((data: IHowWeHelp, index: number) => (
				<HowWeHelpCard key={index} data={data} className={`${index % 2 !== 0 ? "flex-row-reverse" : "" }`} />
			))}
		</div>
	);
};

export default HowWeHelpSection;

const HowWeHelpCard: React.FC<{ data: IHowWeHelp, className?:string }> = ({ data, className }) => {
	return (
		<div className={`flex items-center text-right ${className}`}>
			<div className="basis-1/2">
				<h3 className="text-4xl text-dark-green font-bold">
					{data.header}
				</h3>
				<h4 className="text-xl text-grey my-4">{data.subHeading}</h4>
				{data.features && (
					<ul>
						{data.features.map((feature: string, index: number) => (
							<li className={`flex justify-end gap-2 mb-3 text-dark-green`} key={index}>
								{feature}
								<Check2Icon />
							</li>
						))}
					</ul>
				)}
			</div>
			<img src={data.img} alt={data.header} className="basis-1/2" />
		</div>
	);
};
