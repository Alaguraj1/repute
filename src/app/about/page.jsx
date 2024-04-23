import AboutArea from "@/components/abouts/about-page-com/about";
import { FooterNine,  HeaderNine, Wrapper } from "@/components/layout";


export const metadata = {
    title: "About - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} commonOffCanvas={true} />
            <AboutArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;