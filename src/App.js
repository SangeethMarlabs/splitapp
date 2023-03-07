import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />         
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;