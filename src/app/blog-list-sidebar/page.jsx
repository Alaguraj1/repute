import BlogListArea from "@/components/blogs/blog-list-area";
import SliderBreadcrumb from "@/components/common/breadcrumb/slider-breadcrumb";
import {  FooterNine,  HeaderNine, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Blog List Sidebar - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <HeaderNine header_solid={true} commonOffCanvas={true} />
            <SliderBreadcrumb />
            <BlogListArea />
            <FooterNine />
        </Wrapper>
    );
};

export default index;