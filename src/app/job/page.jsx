import JobPositionArea from "@/components/job-positions/job-position-area";
import JobSectionTitle from "@/components/job-positions/job-section-title";
import JobThumbArea from "@/components/job-positions/job-thumb-area";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Job - Creative Agency & Portfolio Next js Template",
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
            <JobSectionTitle />
            <JobThumbArea />
            <JobPositionArea style_2={true} />
            <FooterNine style_2={true} />
        </Wrapper>
    );
};

export default index;