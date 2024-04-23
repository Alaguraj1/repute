import { FooterNine,  HeaderNine, Wrapper } from "@/components/layout";
import PortfolioDetailsArea from "@/components/portfolio-details/classic-details";


export const metadata = {
    title: "Portfolio Details - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} header_solid={true} commonOffCanvas={true} />
            <PortfolioDetailsArea />
            <FooterNine />
        </Wrapper>
    );
};

export default index;