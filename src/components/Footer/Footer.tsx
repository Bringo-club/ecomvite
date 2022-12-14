import { useTranslation } from "react-i18next";
import { ReactComponent as RunIcon } from "../../assets/icons/run.svg";
import Button from "../UI/Buttons/Button";

const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className="bg-light-green clip-footer">
			<div className="container pt-24 pb-16">
				<h2 className="text-white text-4xl text-center font-bold">
					{t("joinUs")}
				</h2>
				<form className="flex flex-wrap flex-col-reverse lg:flex-row px-4 lg:flex-nowrap justify-center mt-5 gap-5" action="https://form.taxi/s/yr3e3wlq" method="POST">
					<Button label={t("footer.action")} icon={<RunIcon />} />
					<input
						type="email"
						name="email"
						placeholder={t("footer.emailPlaceHolder")}
						className="text-center w-full lg:w-4/12 text-xl p-2 rounded-lg lg:text-right text-light-green focus:outline-none placeholder-light-green"
					/>
				</form>
			</div>
		</div>
	);
};

export default Footer;
