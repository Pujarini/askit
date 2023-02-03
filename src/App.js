import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routeConfig";

function App() {
  return (
    <div className="text-bold text-red-300">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
