import NavBar from "./NavBar";
import WomanMarathon from './WomanMarathon/WomanMarathon';
import AddWomanMarathon from './WomanMarathon/AddWomanMarathon';
import EditWomanMarathon from "./WomanMarathon/EditWomanMarathon";
import AboutUs from "./AboutUs";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/womanMarathon" element={<WomanMarathon />} />
        <Route exact path="/womanMarathon/add" element={<AddWomanMarathon />} />
        <Route exact path="/womanMarathon/:id" element={<EditWomanMarathon />} />
        <Route exact path="/womanMarathon/aboutUs" element={<AboutUs />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
