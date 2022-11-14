import { useTranslation } from "react-i18next";
import BlueBtn from "../UI/Buttons/BlueBtn";
import OutsideLink from "../UI/OutsideLink";
import { ReactComponent as PositionIcon } from "../../assets/icons/position.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";

const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div>
			<div className="container my-10 lg:my-40 flex gap-10 lg:gap-0 flex-wrap lg:justify-between">
				<div className="lg:basis-5/12 text-center lg:text-left">
					<p className='px-4 lg:px-0  text-blue uppercase text-2xl'>{t("getInTouch")}</p>
					<h2 className='px-4 lg:px-0  text-7xl uppercase font-bold '>{t("contact")}</h2>
					<p className='px-4 lg:px-0 text-lg w-3/4 m-auto lg:w-full'>{t("footer.contactDesc")}</p>
				</div>
				<div className="lg:basis-4/12 text-xl flex flex-col gap-10">
					<div className="flex gap-6 justify-center lg:justify-start w-3/4 m-auto lg:w-full">
						<PositionIcon className="fill-blue min-w-[36px] w-14 h-12" />
						<span>{t("footer.address")}</span>
					</div>
					<div className="flex gap-6 justify-center lg:justify-start">
						<MailIcon className="fill-blue" />
						<span>{t("footer.mail")}</span>
					</div>
				</div>
			</div>

			<div
				className="pb-20 pt-10 bg-cover"
				style={{
					backgroundImage: "url('/imgs/backgrounds/footerBg.png')",
				}}
			>
				<div className="container flex justify-between items-center flex-col lg:flex-row gap-6">
					<img
						src="/imgs/icons/whiteLogo.png"
						alt="blue png"
						className="max-w-full h-7 lg:h-auto"
					/>
					<BlueBtn label={t("LetsWorkTogether")} />
				</div>
				<div className="border-2 border-dark-grey my-8" />
				<div className="container flex gap-10 uppercase justify-center lg:justify-start text-xs lg:text-xl">
					<OutsideLink link="/#">
						{t("socialMedia.twitter")}
					</OutsideLink>
					<OutsideLink link="/#">
						{t("socialMedia.instagram")}
					</OutsideLink>
					<OutsideLink link="/#">
						{t("socialMedia.linkedin")}
					</OutsideLink>
				</div>
				<div className="container flex mt-6 gap-3 text-grey items-center text-xs lg:text-base justify-center lg:justify-start">
					<OutsideLink link="/#">{t("footer.copyRight")}</OutsideLink>
					<div className="h-1 w-1 bg-grey rounded-full" />
					<OutsideLink link="/#" className="capitalize">
						{t("footer.privacyPolicy")}
					</OutsideLink>
					<div className="h-1 w-1 bg-grey rounded-full" />
					<OutsideLink link="/#">
						{t("footer.termsConditions")}
					</OutsideLink>
				</div>
			</div>
		</div>
	);
};

export default Footer;

