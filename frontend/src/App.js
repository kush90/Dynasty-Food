import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Public from './layouts/Public/Public';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import Products from './public/pages/Products';
import About from './public/pages/About';
import Contact from './public/pages/Contact';
import Register from './public/pages/Register';
import Login from './public/pages/Login';
import Home from './public/pages/Home';

// import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />



          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
