import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // color: #414141;
  // font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Jua', sans-serif;
}
body {
    font-family: 'GmarketSansMedium';
  line-height: 1;
}
div{
    font-family: 'GmarketSansMedium';
  line-height: 1;
}
input {
  background: transparent;
  border: 0;
  outline: 0;
}
button {
  background: 0;
  padding: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
}
ul,
li {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
`;

export default GlobalStyle;
