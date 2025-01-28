import Logo from "./Logo";
import Link from "next/link";
import { socialIcons } from "../assets/data/homeData";
import { footerLinks } from "../assets/data/homeData";
import TextLink from "./home/TextLink";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-main-wrapper">
        <div className="footer-main-content">
          <div className="footer-col1">
            <Logo color="white" />
            <div className="footer-icons">
              {socialIcons.map(({ icon, href }, index) => (
                <Link href={href} key={index}>
                  <span>
                    <img src={icon} alt="" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <ul>
            {footerLinks.map(({ text, href }, index) => (
              <li key={index}>
                {" "}
                <Link href={href} className="hover:underline">
                  {" "}
                  {text}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col3">
          <div className="footer-text-link-wrapper">
            {" "}
            <TextLink linkText="GET AN INVITE" href="#" bgcolor="black" />
          </div>

          <small>
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
