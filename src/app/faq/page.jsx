import FaqBreadcrumb from "@/components/common/breadcrumb/faq-breadcrumb";
import FaqArea from "@/components/faqs/faq-area";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Faq - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} header_solid={true} commonOffCanvas={true} />
            <FaqBreadcrumb />
            <FaqArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;