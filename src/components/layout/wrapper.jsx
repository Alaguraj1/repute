"use client"
import React, { useEffect } from 'react';   
import { animationCreate } from '@/utils/utils';
import BackToTopCom from '@/components/common/scroll-to-top';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
const Wrapper = ({children}) => {
    
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 200);
  },[])
  return (
    <>
      {children}
      <BackToTopCom/>
    </>
  );
};

export default Wrapper;