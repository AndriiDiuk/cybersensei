"use client";
import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	border: 0;
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

:focus,
:active {
	outline: none;
}

a:focus,
a:active {
	outline: none;
}

nav,
footer,
header,
aside {
	display: block;
}

body {
	height: 100%;
	width: 100%;
	line-height: 1;
	font-size: 0.875rem;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
	font-family: inherit;
}

input::-ms-clear {
	display: none;
}

button {
	cursor: pointer;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

a,
a:visited {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}

ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: 400;
	margin: 0;
	padding: 0;
}

html {
	scroll-behavior: initial; 
	overflow-x: hidden;
}
html, body, #root { 
min-height: 100%; 
height:auto; 

} 
body{

	font-size:0.703125vw;
	font-weight: 400;
	background: #000000;
	color:#ffffff;
}

::-webkit-scrollbar {
	width: 4px;
	height: 4px;
}

::-webkit-scrollbar-thumb {
	-webkit-box-shadow: inset 0px 0px 0px 0px rgba(255, 255, 255, 1); 
    background-color: #003CFF;
    border-radius: 3.75rem;
}

::-webkit-scrollbar-track-piece {
	background-color: #212121;
	 -webkit-border-radius: 0.188rem;
}

.ReactCollapse--collapse {
  transition: height 400ms ease-in-out;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* top: 0; */
  /* left: 0; */
  overflow: hidden;
  /* pointer-events: none; */
  will-change: transform;
`;

export const SmootherContent = styled.div`
  /* pointer-events: none; */
  will-change: transform;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  justify-content: center;
  overflow: hidden;
`;
