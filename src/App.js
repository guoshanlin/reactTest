import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';


class App extends Component {
  render() {
    return (
          <BrowserRouter>
              <div>
                  <div className="header">
                      <a href="/home">Home</a>
                      <a href="/product">Product</a>
                      <a href="/about">About</a>
                      <div className="hide">
                          <Link to="home"> Home</Link>
                          <Link to="product"> Product</Link>
                          <Link to="about">About</Link>
                      </div>
                  </div>
                  <Route path="/home" component={Home}/>
                  <Route path="/product" component={Product}/>
                  <Route path="/about" component={About}/>
              </div>
          </BrowserRouter>
    );
  }
}
export default App;
