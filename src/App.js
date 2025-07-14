import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <Routes>
        {/* <Route path="/inspire" element={<Inspire />} /> */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;