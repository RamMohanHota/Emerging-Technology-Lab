import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App