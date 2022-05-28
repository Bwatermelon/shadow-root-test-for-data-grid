import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const container = document.querySelector("#root");
const shadowRoot = container.attachShadow({ mode: "open" });
const emotionRoot = document.createElement("style");
const renderIn = document.createElement("div");
renderIn.id = "DailyFlightView";
renderIn.style = "height: 100%; overflow: hidden";
shadowRoot.appendChild(emotionRoot);
shadowRoot.appendChild(renderIn);

const cache = createCache({
  key: "css",
  prepend: true,
  container: emotionRoot
});

const root = ReactDOM.createRoot(renderIn);
root.render(
  <StyledEngineProvider injectFirst>
    <CacheProvider value={cache}>
      <Demo />
    </CacheProvider>
  </StyledEngineProvider>
);
