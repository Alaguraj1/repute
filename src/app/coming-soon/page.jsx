import ComingSoon from "@/components/coming-soon";
import {  HeaderNine, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Coming Soon - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderNine />
            <ComingSoon /> 
        </Wrapper>
    );
};

export default index;