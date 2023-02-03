import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routeConfig";

function App() {
  return (
    <div className="bg-black h-full">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
