import {FooterNine,HeaderNine, Wrapper } from "@/components/layout";
import PortfolioDetailsListArea from "@/components/portfolio-details/list-details";


export const metadata = {
    title: "Portfolio Details With List - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper>
            <HeaderNine top_bar={false} header_black={true} commonOffCanvas={true} />
            <PortfolioDetailsListArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;