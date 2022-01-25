import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Landing/Home/Home';
import BookStore from './pages/Landing/BookStores/BookStore';
import InsideShop from './pages/Inside Shop/InsideShop';
import Header from './pages/Landing/Home/Header/Header';
import Register from './pages/Authentication/Register/Register';
import Login from './pages/Authentication/Login/Login';
import AuthProvider from './pages/context/AuthProvider';
import Inventory from './pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/:bookStoreId' element={ <InsideShop /> } />
          <Route exact path='/login' element={ <Login /> } />
          <Route exact path='/register' element={ <Register /> } />
          <Route exact path='/inventory' element={ <Inventory /> } />
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/' element={ <Home /> } />
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


// stores.map(store => <Store key={store?.name} store={store}/>)