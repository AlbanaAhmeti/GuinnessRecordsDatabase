import AddWomanMarathon from './AddWomanMarathon';
import WomanMarathon from "./WomanMarathon";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/womanMarathon" element={<WomanMarathon />} />
        <Route exact path="/womanMarathon/add" element={<AddWomanMarathon />} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
