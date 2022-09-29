import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Hotel from "./components/pages/Hotel/Hotel";
import List from "./components/pages/List/List";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
