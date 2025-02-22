import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// // mocks
// import { worker } from "./mocks/browser.ts";

// worker
//   .start({
//     onUnhandledRequest: "bypass",
//   })
//   .then(() => {
//     const deviceType = "tablet";
//     const rootElement = document.getElementById("root");

//     if (rootElement) {
//       rootElement.className = deviceType;

//       ReactDOM.createRoot(rootElement).render(
//         <React.StrictMode>
//           <App />
//         </React.StrictMode>
//       );
//     }
//   });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
