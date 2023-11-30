
import './App.css';

//shared components
import Header from './views/shared/Header'
import Footer from './views/shared/Footer'

//page components
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import CatFacts from './views/CatFacts'
import DogFacts from './views/DogFacts'

//dependencies
import{BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/catFacts' element={<CatFacts/>} />
          <Route path='/dogFacts' element={<DogFacts/>} />
        </Routes>
        </BrowserRouter>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
