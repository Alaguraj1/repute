'use client'
import { blog_data } from "@/data";
import BlogGridAreaTwo from "../blog-grid-area-2";

// blog items
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(1, 7);

const BlogGridAreaTwoIndex = () => {
    return (
        <>
            <BlogGridAreaTwo blog_items={blog_items} />
        </>
    );
};

export default BlogGridAreaTwoIndex;