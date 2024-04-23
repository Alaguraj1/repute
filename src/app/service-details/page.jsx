import BreadcrumbNine from "@/components/common/breadcrumb/breadcrumb-9";
import { FooterNine,  HeaderNine, Wrapper } from "@/components/layout";
import ServiceDetailsArea from "@/components/service-details/service-details-area";

export const metadata = {
    title: "Service Details - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} commonOffCanvas={true} />
            <BreadcrumbNine title='Mobile App' />
            <ServiceDetailsArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;