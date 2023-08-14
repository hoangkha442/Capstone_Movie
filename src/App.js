import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import UserTemplate from './templates/UserTemPlate.jsx/UserTemplate';
import HomePage from './pages/HomePage/HomePage';
import Search from './pages/Search/Search';
import LoginPage from './pages/LoginPage/LoginPage';
import Details from './pages/Details/Details';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import BuyTicket from './pages/BuyTicket/BuyTicket';
import SearchItem from './pages/Search/SearchItem';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <div>
      <Spinner />
      <Router>
        <Routes>
          {/* USER LAYOUT  */}
          <Route path='/' element={<UserTemplate />}>
            <Route index element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/search' element={<Search />} />
            <Route path='/searchItem' element={<SearchItem />} />
            <Route path='/detail/:id' element={<Details />} />
            <Route path='/buy-tickets/:id' element={<BuyTicket />} />
          </Route>
          {/* ADMIN LAYOUT  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
