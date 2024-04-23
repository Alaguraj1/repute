import JobDetailsArea from "@/components/job-details/job-details-area";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Job Details - Creative Agency & Portfolio Next js Template",
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
            <JobDetailsArea />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;