import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Category from './pages/category/Category';
import Recipe from './pages/recipe/Recipe';
import NotFound from './pages/notFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/category/:name" element={<Category />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
