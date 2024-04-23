import BlogDetailsTwoArea from "@/components/blogs/blog-details-2/blog-details-2-area";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";

export const metadata = {
  title: "Blog Details Two - Creative Agency & Portfolio Next js Template",
  icons: {
    icon: "favicon.ico",
  },
};

const index = () => {
  return (
    <Wrapper>
      <HeaderNine header_solid={true} commonOffCanvas={true} />
      <BlogDetailsTwoArea />
      <FooterNine />
    </Wrapper>
  );
};

export default index;
