import {  FooterNine, HeaderNine, Wrapper } from "@/components/layout";
import PortfolioClassic from "@/components/portfolios/portfolio-page-com/portfolio-classic";

export const metadata = {
    title: "Portfolio Gallery - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} header_solid={true} commonOffCanvas={true} />
            <PortfolioClassic tooltip_hover={true} />
            <FooterNine />
        </Wrapper>
    );
};

export default index;