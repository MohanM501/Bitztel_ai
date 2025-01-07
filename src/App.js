import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button";
import MainRoutes from './Pages/MainRoutes';
import NavbarComp from './Components/NavbarComp';





function App() {
  return (
    <div className="App">
        <NavbarComp/>
         <MainRoutes/>
       
    </div>
  );
}

export default App;
