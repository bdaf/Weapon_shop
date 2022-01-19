import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Route, Routes} from 'react-router-dom';

import Products from './Pages/Products';
import ProductsBuy from './Pages/ProductsBuy';
import Main from './Pages/Main';
import Orders from './Pages/Orders';
import Discounts from './Pages/Discounts';
import CustomNavbar from './Components/layout/CustomNavbar';
import Categories from './Pages/Categories';
import CategoryDetails from './Components/Category/CategoryDetails';

function App() {
  return (
      <div style={{textAlign : 'center'}}>
        <CustomNavbar />
        <Routes>
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<CategoryDetails />} />
          <Route path='/discounts' element={<Discounts />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
          <Route path="/main" element={<Main />} />
          <Route path="/productsbuy" element={<ProductsBuy />} />
        </Routes>
      </div>
  );
}

export default App;
