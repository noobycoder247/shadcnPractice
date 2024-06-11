import {BrowserRouter} from "react-router-dom";
import RoutesDirectory from "@/routes/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesDirectory />
    </BrowserRouter>
  );
};

export default App;