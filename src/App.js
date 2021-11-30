import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Home/Home/Navigation/Navigation';
import Home from './Components/Home/Home/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Home></Home>
    </BrowserRouter>
  );
}

export default App;
