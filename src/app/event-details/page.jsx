import EventDetailsArea from "@/components/event-details/event-details-area";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Event Details - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <HeaderNine
                top_bar={false}
                header_black={true}
                header_solid={true}
                commonOffCanvas={true}
            />
            <EventDetailsArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;