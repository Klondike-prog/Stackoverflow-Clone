import React from "react";
import { IntroBg, VideoBg, Overlay} from "./IntroElements";
import Video from "../Videos/video2.mp4"


const IntroSectionQuestions = () => {
  return (
    <>
    <IntroBg>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      <Overlay></Overlay>
    </IntroBg>
   
    </>
  );
};

export default IntroSectionQuestions;
