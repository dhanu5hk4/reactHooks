import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import UseCallback from "./UseCallback";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <Fragment>
    <UseCallback />
  </Fragment>
);
