
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import ProductSelection from './pages/ProductSelection'
import SubCategory from './pages/SubCategories'
import Product from './pages/Product'
import Cookies from './pages/Cookies'
import Cakes from './pages/Cakes'
import Gift from './pages/Gift'
import Tarts from './pages/Tart'
import Order from './pages/Order'
import OrderComplete from './pages/OrderComplete'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cookies' element={<Cookies/>}></Route>

        <Route path='/productSelect/:categoryId/:id' element={<ProductSelection/>}></Route>
        <Route path='/tarts' element={<Tarts/>}></Route> 
        <Route path='/cakes' element={<Cakes/>}></Route>
        <Route path='/gifts' element={<Gift/>}></Route>
       

        <Route path='/' element={<Login/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/subCategories' element={<SubCategory/>}></Route>
        <Route path='subCategories/:name/product' element={<Product/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/orderComplete' element={<OrderComplete/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
