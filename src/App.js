import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import UserTemplate from './templates/UserTemPlate.jsx/UserTemplate';
import HomePage from './pages/HomePage/HomePage';
import Search from './pages/Search/Search';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* USER LAYOUT  */}
        <Route path='/' element={<UserTemplate />}>
          <Route index element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/search' element={<Search />} />
        </Route>

        {/* ADMIN LAYOUT  */}
      </Routes>
    </Router>
  );
}

export default App;
