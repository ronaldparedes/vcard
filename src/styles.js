import styled from "styled-components";
import palette from "./components/colors";

const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  background-color: ${palette.quinary};
  .mainTitle {
    color: ${palette.primary};
    font-weight: 300;
  }
`;

export default StyledApp;
