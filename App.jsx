import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw } from "twind";

setup({});

const App = () => {
  return (
    <div
      className={tw`h-screen w-full overflow-hidden`}
      style={{
        backgroundImage: "url('assets/bg.svg')",
        backgroundSize: "125px",
        backgroundPosition: "top",
      }}
    ></div>
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
