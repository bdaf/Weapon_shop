import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Route, Routes} from 'react-router-dom';

import AdministratorPanel from './Pages/AdministratorPanel';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import CustomNavbar from './Components/layout/CustomNavbar';

function App() {
  return (
      <div style={{textAlign : 'center'}}>
        <CustomNavbar />
        <Routes>
          <Route path='/panel' element={<AdministratorPanel />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
  );
}

export default App;
