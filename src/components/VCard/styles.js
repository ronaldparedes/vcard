import styled from "styled-components";
import palette from "../colors/";

export const StyledContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 100px;
  position: relative;
  text-align: initial;
  width: 370px;
  height: 230px;
  @media (max-width: 370px) 
    width: 100vw;
  }
  .front {
    transform: perspective(1000px) rotateX(0deg);
  }
  .back {
    cursor: pointer;
    transform: perspective(1000px) rotateX(180deg);
  }
  .rotate-front {
    transform: perspective(1000px) rotateX(180deg);
  }
  .rotate-back {
    transform: perspective(1000px) rotateX(360deg);
  }
  @keyframes shake{
    0% {
      transform: perspective(1000px) rotateX(0deg);
    }      
    15% {
      transform: perspective(1000px) rotateX(10deg);
    }
    45%{

      transform: perspective(1000px) rotateX(-10deg);
    }        
    75% {
      transform: perspective(1000px) rotateX(0deg);
    }      

    100%{
      transform: perspective(1000px) rotateX(0deg);
    }
  }
  .card-showing{
    animation: shake 400ms ease-in-out 400ms 2;
  }
  @keyframes showHide {
    0% {
      opacity: 0;
    }
    50%{
      opacity: 1
    }
    100% {
      opacity: 1;
    }
  }
  .animTooltip .tooltip{
    animation: showHide 1200ms ease-in-out 1000ms 2 alternate;
  }
`;

const StyledVCard = styled.div`
  position: relative;
  box-sizing: border-box;
  backface-visibility: hidden;
  display: inline-flex;
  width: 370px;
  height: 225px;
  @media (max-width: 370px) {
    width: 100vw;
  }
  padding: 0 10px;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  transition: transform 1s cubic-bezier(0.52, -0.76, 0.52, 1.65);
  img {
    user-select: none;
  }
`;
export const StyledVCardFront = styled(StyledVCard)`
  justify-content: space-between;
  font-style: normal;
  background-color: #fff;
  /* overflow: hidden; */
  .left-half {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 285px;
    padding: 10px;
    padding-right: 0;
  }
  .right-half {
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    &:hover,
    &:hover > div {
      border-color: #acd479;
    }
    &:hover .sm-logo {
      filter: grayscale(0) saturate(0.5);
    }
    &:hover {
      cursor: pointer;
    }
  }
  .right-half,
  .vrule-1,
  .vrule-2 {
    border-left: 1px solid #dfe1e5;
    border-right: 1px solid #dfe1e5;
    width: 56px;
  }
  .vrule-1,
  .vrule-2 {
    width: 12px;
    @media (max-width: 370px) {
      display: none;
    }
  }
  .vrule-1 {
    @media (max-width: 370px) {
      display: inherit;
      margin: 0 7px;
      width: 20px;
    }
  }
  a {
    text-decoration: none;
    color: #00914c;
  }
  .tooltip {
    opacity: 0;
    font-size: 9px;
    font-weight: 300;
    padding: 5px;
    position: absolute;
    top: -10px;
    background-color: #acd479;
    box-shadow: 1px 2px 3px #aaa;
    border-radius: 5px;
    transition: opacity 500ms;
    &::after {
      content: "";
      background-color: #acd479;
      top: 88%;
      left: 10%;
      transform: rotate(45deg);
      position: absolute;
      width: 5px;
      height: 5px;
      box-shadow: 1px 1px 1px #aaa;
    }
  }
  a:hover {
    color: #acd479;
  }

  h1,
  h2,
  h3 {
    text-align: left;
    font-weight: 300;
    font-size: 0.85rem;
  }
  .name {
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 8px;
    margin-bottom: 0px;
    &:hover {
      color: #acd479;
      cursor: pointer;
    }
    &:hover ~ .tooltip {
      opacity: 1;
    }
  }
  h2 {
    text-transform: uppercase;
    margin-top: 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dfe1e5;
  }
  h3 {
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .logo {
    align-self: flex-end;
    padding-right: 10px;
  }
  .sm-logo {
    position: absolute;
    left: 5px;
    bottom: 15px;
    filter: grayscale();
  }
`;

export const StyledVCardBack = styled(StyledVCard)`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #666;
  justify-content: center;
  align-items: center;
  .back-logo {
    width: 80%;
    filter: invert(100%) hue-rotate(180deg);
  }
`;
