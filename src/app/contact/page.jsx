import ContactArea from "@/components/contacts/contact-area";
import { FooterNine,HeaderNine, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Contact - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <HeaderNine top_bar={false} header_solid={true} />
            <ContactArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;