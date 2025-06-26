// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import MuiProvider from "./mui/MuiProvider";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <MuiProvider>
//       <App />
//     </MuiProvider>
//   </BrowserRouter>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MuiProvider from "./mui/MuiProvider";
import { BrowserRouter } from "react-router-dom";

// root에서 aria-hidden 속성 제거 (접근성 문제 해결)
const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasAttribute("aria-hidden")) {
  rootElement.removeAttribute("aria-hidden");
}

createRoot(rootElement).render(
  <BrowserRouter>
    <MuiProvider>
      <App />
    </MuiProvider>
  </BrowserRouter>
);
