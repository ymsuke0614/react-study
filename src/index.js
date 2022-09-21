import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import GitHubUserComponent from './github-user/GitHubUser';
// import ColorListComponent from './color-list/App';
// import ColorProvider from './color-list/ColorProvider';

const rootElement = document.getElementById("root");

render(
  // chapter6
  // <ColorProvider>
  //   <ColorListComponent />
  // </ColorProvider>,
  // document.getElementById("root")

  // chapter8
  <React.StrictMode>
    <GitHubUserComponent />
  </React.StrictMode>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
