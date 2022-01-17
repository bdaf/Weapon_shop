import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Route, Routes} from 'react-router-dom';

import Products from './Pages/Products';
import Orders from './Pages/Orders';
import Discounts from './Pages/Discounts';
import CustomNavbar from './Components/layout/CustomNavbar';
import Categories from './Pages/Categories';

function App() {
  return (
      <div style={{textAlign : 'center'}}>
        <CustomNavbar />
        <Routes>
          <Route path='/categories' element={<Categories />} />
          <Route path='/discounts' element={<Discounts />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
  );
}

export default App;
