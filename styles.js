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
  margin-bottom: 14vh;
  padding: 10px;
  align-items: center;
}
`;
