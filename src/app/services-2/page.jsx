import BreadcrumbEight from "@/components/common/breadcrumb/breadcrumb-8";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";
import ServicesTwoArea from "@/components/services/services-2-area";

export const metadata = {
    title: "Service Two - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} commonOffCanvas={true} />
            <BreadcrumbEight title={<>Tech Solutions <br /> for Business</>} />
            <ServicesTwoArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;