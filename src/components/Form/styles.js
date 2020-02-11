import styled from "styled-components";
import palette from "../colors";

export const StyledForm = styled.form`
  .button-field {
    margin: 0 25px 25px 25px;
    display: flex;
    justify-content: space-around;
  }
  button {
    outline: none;
    height: 40px;
    width: 6rem;
    font-size: 1rem;
    border-radius: 10px;
    background-color: transparent;
  }
  .active {
    border: 2px solid ${palette.primary};
    color: ${palette.primary};
  }
  .inactive {
    border: 2px solid ${palette.secondary};
    color: ${palette.secondary};
  }
  .active:hover {
    cursor: pointer;
    filter: saturate(200%);
  }
`;
