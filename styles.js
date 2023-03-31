import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }
main {
  
  width: 100%;
  padding: auto;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
}
`;
