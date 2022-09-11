import { Routes, Route, /*Link*/ } from "react-router-dom";
import Home from './pages/home';
import Hello from './pages/hello'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<Hello />} />
    </Routes>
  );
}

export default App;