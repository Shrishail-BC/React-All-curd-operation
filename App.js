import react, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Registerpage from './component/Registerpage';
import Login from './component/Login';

import Product from './component/Product';
import ProductList from './component/ProductList';
import Editproduct from './component/Editproduct';


function App() {

  const LOCAL_STORAGE_KEY = "products"
  const [products, setProducts] = useState([]);
  

  const addproductHandler = (product) => {
    console.log(product);
    console.log(uuidv4());
    setProducts([...products, { id: uuidv4(), ...product }]);
  }

  const updateproductHandler = (updatedProduct) => {
    const { id } = updatedProduct;
    console.log(updatedProduct, id);

    setProducts(products.map((product) => {
      return product.id === id ? { ...updatedProduct } : product;
    }));

  };

  const removeproducthandler = (id) => {
    const newProductList = products.filter((product) => {
      return product.id != id;
    });
    setProducts(newProductList);
  }

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveProducts) setProducts(retriveProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  return (
    <div className='backcolor'>
      <Router>
        {/* <Header /> */}
        <Switch>
        <Route path="/" exact component={Login }/>
          <Route path="/register"  component={Registerpage }/>
          <Route path="/ProductList"  component={() => (<ProductList products={products} getProductId={removeproducthandler} />)} />
          <Route path="/add" component={(props) => <Product {...props} addproductHandler={addproductHandler} />} />
          <Route path="/edit" component={(props) => <Editproduct {...props} updateproductHandler={updateproductHandler} />} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
