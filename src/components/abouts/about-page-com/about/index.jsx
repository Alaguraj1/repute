'use client';
import React, { useEffect, useState } from "react";
// internal
import PortfolioAwards from '@/components/awards/portfolio-awards';
import AgencyBrands from '@/components/brands/agency-brands';
import PortfolioService from '@/components/services/portfolio-service';
import HomeTeams from '@/components/teams/home-teams';
import AboutFaqs from './about-faqs';
import AboutGallery from './about-gallery';
import AboutTopBar from './about-top-bar';
import TextArea from './text-area';
import AboutCta from '@/components/cta/about-cta';
import { singleSlugData } from "@/utils/function";


const AboutArea = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SlugData();
  }, []);

  const SlugData = async () => {
    try {
      setLoading(true);
      const res = await singleSlugData("about");
      if (res.length > 0) {
        console.log("res: ", res);
        const response = res[0].content.rendered;
        
        // Remove arrays from the content
        const htmlContent = response.replace(/\[(.*?)\]/g, '');
  
        console.log('✌️htmlContent --->', htmlContent);
  
        setData(htmlContent);
      } else {
        console.error("Page Not Found");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error: ", error);
    }
  };
  
  
  console.log("data: ", data);

  return (
    <>
      <AboutTopBar/>
      <TextArea/>
      <PortfolioService style_2={true} />
      <AboutGallery/>
      <PortfolioAwards style_2={true} />
      <AboutFaqs/>
      <HomeTeams style_2={true} />
      <AgencyBrands spacing={true} style_2={true} />
      {/* <AboutCta/> */}
      {loading === true ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.length > 0 && (
            <div
              dangerouslySetInnerHTML={{ __html: data}}
            ></div>
          )}
        </div>
      )}
    </>
  );
};

export default AboutArea;

