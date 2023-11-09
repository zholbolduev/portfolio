import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faEnvelope, faLinkedin, faTelegram } from "../assets";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a
        href="https://github.com/zholbolduev"
        target="_blank"
        rel="noreferrer"
        aria-label="link to github"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faGithub}
        />
      </a>
      <a
        href="mailto:eldos.zholbolduev@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="link to mail"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faEnvelope}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/zholbolduev"
        target="_blank"
        rel="noreferrer"
        aria-label="link to linkedin"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faLinkedin}
        />
      </a>
      <a
        href="https://t.me/wsdosi"
        target="_blank"
        rel="noreferrer"
        aria-label="link to telegram"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faTelegram}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
