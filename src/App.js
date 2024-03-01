import LandingPage from './pages/LandingPage';
import SearchBar from './components/SearchBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/main' element={<SearchBar />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
