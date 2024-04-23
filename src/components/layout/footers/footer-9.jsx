import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/footer/footer-shape-4.png";
import logo from "@assets/img/logo/logo.svg";
import SocialLinks from "@/components/social";
import CopyrightText from "./component/copyright-text";
import {EmailFour,PhoneFive} from "@/svg";

// single widget
function SingleWidget({ col, col_2, col_3, title, contents }) {
  return (
    <div className={`col-xxl-${col} col-xl-${col} col-lg-4 col-sm-${col_2}`}>
      <div
        className={`footer__widget footer__widget-8 mb-50 footer-col-8-${col_3}`}
      >
        <h3 className="footer__widget-title-8">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const FooterNine = () => {
  return (
    <>
      <footer>
        <div className="footer__area" data-bg-color="footer-bg-black-3">
          <div className="footer__top footer__top-8">
            <div className="footer__shape">
              <Image className="footer__shape-4" src={shape} alt="shape" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-sm-6">
                  <div className="footer__widget footer__widget-8 mb-50 footer-col-8-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info-8">
                        <p>
                        We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.
                        </p>
                        <div className="footer__info-item-8 d-flex align-items-start">
                          <div className="footer__info-icon-8 mr-20">
                            <span>
                              <EmailFour />
                            </span>
                          </div>
                          <div className="footer__info-text-8">
                            <h4>Email us:</h4>
                            <a href="mailto:support@irepute.in">
                              support@irepute.in
                            </a>
                          </div>
                        </div>
                        <div className="footer__info-item-8 d-flex align-items-start">
                          <div className="footer__info-icon-8 mr-20">
                            <span>
                              <PhoneFive />
                            </span>
                          </div>
                          <div className="footer__info-text-8">
                            <h4>Call us:</h4>
                            <a href="tel:04224980307">+91 (422) 498 0307</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SingleWidget
                  col="3"
                  col_2="6"
                  col_3="2"
                  title="Navigation"
                  contents={[
                    { url: "home-architecture", title: "Home" },
                    { url: "about", title: "About" },
                    { url: "portfolio-2", title: "Projects" },
                    { url: "services-2", title: "Services" },
                    { url: "blog-grid", title: "Blog" },
                    { url: "contact", title: "Contact" },
                  ]}
                />
                <SingleWidget
                  col="2"
                  col_2="5"
                  col_3="3"
                  title="Services"
                  contents={[
                    { url: "services", title: "Interior" },
                    { url: "services", title: "Planning" },
                    { url: "services", title: "Decoration" },
                    { url: "services", title: "Materials" },
                    { url: "services", title: "Construction" },
                  ]}
                />

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-sm-7">
                  <div className="footer__widget footer__widget-8 mb-50 footer-col-8-4">
                    <h3 className="footer__widget-title-8">Location</h3>

                    <div className="footer__widget-content">
                      <div className="footer__subscribe-8">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.150510310364!2d76.93796517482099!3d11.027332154516044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85815bb375b37%3A0x2ae31305026b56e8!2sRepute%20Digital%20Business%20Agency%20%7C%20Best%20Website%20Development%20and%20Digital%20Marketing%20Service%20Providers!5e0!3m2!1sen!2sin!4v1713769253447!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-8">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="footer__copyright-8">
                    <CopyrightText />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer__social-8 text-sm-end">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterNine;
