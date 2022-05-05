import React from "react";
import {ImageBg,IntroBg,Overlay} from "./IntroElements";
import Image from "../Images/image2.jpg"


const IntroSectionImage = () => {
  return (
    <>
      <IntroBg>
      <ImageBg   style={{ backgroundImage:`url(${Image})` }} />
   
      <Overlay></Overlay>
  </IntroBg>
   
    </>
  );
};

export default IntroSectionImage;
