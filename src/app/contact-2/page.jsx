import ContactClassicArea from "@/components/contacts/contact-classic";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Contact Two - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} header_solid={true} header_black={true} />
            <ContactClassicArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;