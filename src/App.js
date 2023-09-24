import LandingPage from './pages/LandingPage';
import SearchBar from './components/SearchBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/home' element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
