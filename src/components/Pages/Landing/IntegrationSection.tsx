import { useTranslation } from "react-i18next";

const IntegrationSection: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className="bg-light-green clip-integration-section">
			<div className="container py-24">
				<h3 className="text-2xl lg:text-4xl text-white font-bold text-center">{t("integrationSection.header")}</h3>
				<div className="flex flex-wrap justify-center gap-5 lg:gap-10 mt-14">
					<img src="/imgs/integration/sheet.png" alt="" />
					<img src="/imgs/integration/shopify.png" alt="" />
					<img src="/imgs/integration/woocommerce.png" alt="" />
					<img src="/imgs/integration/youcan.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default IntegrationSection;
