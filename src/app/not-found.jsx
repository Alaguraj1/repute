import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";
import NotFound from "@/components/not-found";

export const metadata = {
    title: "404 || Error Page - Creative Agency & Portfolio Next js Template",
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} header_solid={true} commonOffCanvas={true} />
            <NotFound /> 
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;