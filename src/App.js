import { RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import ChartBar from "./components/ChartBar/ChartBar";
import { router } from "./components/Leyout/MainLeyout";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <ChartBar /> */}
    </div>
  );
}

export default App;
