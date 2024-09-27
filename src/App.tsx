import { useEffect } from 'react';
import './App.css'
import HomePage from './pages/HomePage'
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>    
    <HomePage></HomePage>
    </>
  )
}

export default App
