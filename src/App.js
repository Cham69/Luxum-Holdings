import Navbar from "./components/Navbar";
//import house from "./assets/house.jpg";
import {Routes, Route} from 'react-router-dom';
import Apartments from "./components/Apartments";
import Houses from "./components/Houses";
import Lands from "./components/Lands"; 
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Pages />
      <Routes>
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/lands" element={<Lands />} />
      </Routes>
    </div>
  );
}

export default App;
