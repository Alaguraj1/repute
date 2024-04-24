'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import about_img from "@assets/img/about/8/about-img-1.jpg";
import bg from "@assets/img/about/8/about-img-2.jpg";
import { HighlightShapeFive, PhoneFive, Play } from "@/svg";
import VideoModal from "@/components/common/modals/modal-video";
import useModal from "@/hooks/use-modal";

const ArchitectureAbout = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      {/* <div id="tpabout" className="about__area black-bg-12 pt-140"> */}
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className="about__thumb-wrapper-8 pr-100 pb-100 p-relative">
                <div
                  className="about__thumb-8 w-img wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <Image src={about_img} alt="image" />
                </div>
                <div
                  className="about__thumb-8-right wow fadeInUp"
                  data-wow-delay=".6s"
                  data-wow-duration="1s"
                >
                  <div
                    className="about__thumb-bg include-bg"
                    style={{ backgroundImage: `url(${bg.src})` }}
                  >
                    25
                  </div>
                  <div className="about__thumb-8-right-content">
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>
                  <div className="about__thumb-8-right-year">
                    <p>
                      Start in <br />
                      1982
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <div
                className="about__wrapper-8 pt-30 pl-70 wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="section__title-wrapper-8 mb-15">
                  <span className="section__title-pre-8">Full Service Digital Agency</span>
                  <h3 className="section__title-8">
                  Build-Promote <br />  {' '}
                    <span className="section__title-highlight-8">
                    Market Brands.
                        <HighlightShapeFive />
                    </span>
                  </h3>
                </div>
                <p className="about-wrapper-8-paragraph">
                With more than 2 decades of Credibility and Expertise Repute will be your right partner to progress.
                </p>
                <p>
                We are a one-stop solution for your brand’s digital journey and are passionate about creating a brand experience with our unique strategy and expertise, emphasizing every dimension of branding and promotion. We are proficient in market research, corporate branding, logo design, redefining brand strategy, media planning, digital advertising, content creation, and website design and development.
                </p>

                <div className="about__call-8 d-flex align-items-center mb-50">
                  <div className="about__call-icon-8 mr-20">
                    <span>
                      <PhoneFive />
                    </span>
                  </div>
                  <div className="about__call-content-8">
                    <h4>Get Quote</h4>
                    <p>
                      <a href="tel:04224980307">+91 (422) 498 0307</a>
                    </p>
                  </div>
                </div>
                <div className="about__btn-8 d-block d-sm-flex align-items-center">
                  <Link href="/about" className="tp-btn-border-8 mb-20 mr-30">
                    More About Us
                  </Link>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsVideoOpen(true)}
                    className="about-play-btn-2 mb-20 popup-video"
                  >
                    <span>
                      <Play />
                    </span>
                    View our <br />
                    Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"elW0kxshn8A"}
      />
      {/* video modal end */}
    </>
  );
};

export default ArchitectureAbout;
