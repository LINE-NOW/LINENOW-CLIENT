// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// mocks
import { worker } from "./mocks/browser.ts";

worker
  .start({
    onUnhandledRequest: "bypass",
  })
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
  });

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
