import styled from "styled-components";

export const IntroBg = styled.div`
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`;

export const ImageBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;


export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color:rgba(6, 51, 38,0.5);
  background: linear-gradient(
      180deg,
      rgba(6, 51, 38, 0.3) 0%,
      rgba(6, 51, 38, 0.35) 100%
    ),
    linear-gradient(180deg, rgba(6, 51, 38, 0.3) 0%, transparent 100%);
`;
