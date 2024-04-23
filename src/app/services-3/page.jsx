import ServiceThreeAbout from "@/components/abouts/service-3-about";
import AgencyBrands from "@/components/brands/agency-brands";
import ServiceThreeCta from "@/components/cta/service-3-cta";
import CommonFaq from "@/components/faqs/common-faq";
import ServiceThreeFeature from "@/components/features/service-3-feature";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";
import ServiceThreeServices from "@/components/services/service-3-services";
import ServiceThreeTestimonial from "@/components/testimonials/service-3-testimonial";
import ServiceThreeVideoArea from "@/components/video-area/service-3-video-area";


export const metadata = {
    title: "Service Three - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} commonOffCanvas={true} />
            <ServiceThreeVideoArea />
            <ServiceThreeFeature />
            <ServiceThreeAbout />
            <ServiceThreeServices />
            <ServiceThreeTestimonial />
            <AgencyBrands spacing={true} />
            <CommonFaq />
            <ServiceThreeCta />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;