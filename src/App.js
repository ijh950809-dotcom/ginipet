import './style/reset.css';//초기화
import './style/common.css';
import './style/layout.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './components/Main';
import Intro from './components/Intro';
import Info from './components/Info';
import Event from './components/Event';
import Customer from './components/Customer';
import Login from './components/Login';
import Join from './components/Join';
import Cart from './components/Cart';
import Order from './components/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* sub콤포넌트 목록 */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/info' element={<Info />} />
          <Route path='/event' element={<Event />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
