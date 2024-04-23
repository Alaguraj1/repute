'use client'
import { blog_data } from "@/data";
import BlogGridAreaTwo from "../blog-grid-area-2";


// blog items
const blog_items = blog_data
    .filter((blog) => blog.blog_grid)
    .filter((blog) => !blog.blog_quote)
    .slice(0, 6);

const BlogGridAreaTwoSliderIndex = () => {
    return (
        <>
            <BlogGridAreaTwo blog_items={blog_items} grid_sidebar={true} />
        </>
    );
};

export default BlogGridAreaTwoSliderIndex;