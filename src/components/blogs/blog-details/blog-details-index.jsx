'use client'
import BreadcrumbSix from "@/components/common/breadcrumb/breadcrumb-6";
import { blog_data } from "@/data";
import BlogDetailsArea from "./blog-details-area";




const single_blog = blog_data[2];

const BlogDetailsIndex = () => {
    return (
        <>
            <BreadcrumbSix {...single_blog} />
            <BlogDetailsArea blog={single_blog} />
        </>
    );
};

export default BlogDetailsIndex;