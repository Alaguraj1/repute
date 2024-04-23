import ServicesAbout from "@/components/abouts/services-about";
import BreadcrumbSeven from "@/components/common/breadcrumb/breadcrumb-7";
import {  FooterNine, HeaderNine, Wrapper } from "@/components/layout";
import ServicesPortfolio from "@/components/portfolios/services-portfolio";
import ServicesHome from "@/components/services/services-home";
import ServicesSubscribe from "@/components/subscribe/services-subscribe";
import ServicesSupportArea from "@/components/supports/services-support-area";
import ServicesVision from "@/components/visions/services-vision";


export const metadata = {
    title: "Service - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} commonOffCanvas={true} />
            <BreadcrumbSeven />
            <ServicesHome style_2={true} />
            <ServicesAbout />
            <ServicesVision />
            <ServicesPortfolio />
            <ServicesSupportArea />
            <ServicesSubscribe />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;