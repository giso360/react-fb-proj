import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './components/userpage/UserPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import './bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';


function App() {

  

  return (

      <Router>

        <Routes>

          <Route exact path='/' element={<LoginPage />} />

          <Route path='/register' element={<RegisterPage />} />
          
          <Route exact path='/user/:username' element={<UserPage />} /> 
          
        </Routes>

      </Router>

  );
}

export default App;
