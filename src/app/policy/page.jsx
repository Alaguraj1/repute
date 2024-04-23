import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";
import SectionArea from "@/components/section-area/section-area";
import PolicyArea from "@/components/terms-policy/policy-area";

export const metadata = {
    title: "Policy - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} header_solid={true} commonOffCanvas={true} />
            <SectionArea
                title="Privacy Policy"
                subtitle={
                    <>
                        Your privacy is important to us. It is Harry’s policy to respect
                        your privacy regarding <br /> any information we may collect from
                        you across our website, https:// Harry.com, <br /> and other sites
                        we own and operate.
                    </>
                }
            />
            <PolicyArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;