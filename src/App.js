import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navBars";
import About from "./pages/about";
import Quiz from "./pages/quiz";
import Review from "./pages/review";
import Process from "./pages/process";

function App() {
  
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/review" element={<Review />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </div>
        </div>
      </Router>
  );
}

export default App;