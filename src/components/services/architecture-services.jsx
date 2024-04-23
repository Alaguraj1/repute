'use client'
import React from "react";
// internal
import {HighlightShapeFive} from "@/svg";
import service_icon_1 from "@assets/img/icon/services/8/services-1.svg";
import service_icon_2 from "@assets/img/icon/services/8/services-2.svg";
import service_icon_3 from "@assets/img/icon/services/8/services-3.svg";
import service_icon_4 from "@assets/img/icon/services/8/services-4.svg";
import ArchitectureServiceItem from "./single-service/architecture-single-service";

// animated border services items
export function ArcAnimatedServicesItems({}) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".3s"
          icon={service_icon_1}
          title="Brand Creatives"
          subtitle="Logo Design Brochure/ Catalogue Design Package Design Stall Design OOH Media Designs Advertisement Design"
          readmore="Know More"
        />
      </div>
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".7s"
          icon={service_icon_3}
          title="Digital Marketing"
          subtitle="Search Engine Optimisation Social Media Marketing Search Engine Marketing PPC Marketing & Management."
          readmore="Know More"
        />
      </div>
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".5s"
          icon={service_icon_2}
          title="Website Design & Development Services"
          subtitle="Website Design Content Managed Websites, Web Based Application Development, Search Engine Optimisation"
          readmore="Know More"
        />
      </div>
      
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".9s"
          icon={service_icon_4}
          title="Ecommerce Development "
          subtitle="Custom Ecommerce Portal Development WooCommerce Development Magento Development Shopify Development Marketplace Commerce Development"
          readmore="Know More"
        />
      </div>
      
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".9s"
          icon={service_icon_4}
          title="Marketplace Management "
          subtitle="Marketplace Account Creation, Marketplace Content Optimization, Marketplace Promotion, Order Processing"
          readmore="Know More"
        />
      </div>
      <div className="col-lg-6 col-md-6">
        <ArchitectureServiceItem
          delay=".9s"
          icon={service_icon_4}
          title="Mobile Application Development"
          subtitle="iOS Application, Android Application, Flutter Application,React Native Applications "
          readmore="Know More"
        />
      </div>

    </div>
  );
}

const ArchitectureServices = () => {
  return (
    <>
      <section className="services__area pt-115 pb-105 black-bg-12">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-8 text-center mb-60">
                <span className="section__title-pre-8">Our Services</span>
                <h3 className="section__title-8">
                  Our featured{" "}
                  <span className="section__title-highlight-8">
                    services
                    <HighlightShapeFive />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* ArcAnimatedServicesItems */}
          <ArcAnimatedServicesItems/>
          {/* ArcAnimatedServicesItems */}
        </div>
      </section>
    </>
  );
};

export default ArchitectureServices;
