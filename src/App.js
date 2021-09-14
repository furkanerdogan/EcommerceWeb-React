import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "firebase/auth";

import firebase, { auth } from "firebase/app";

/*App */
import BasketScreen from "./screen/BasketScreen"
import Home from './screen/HomeScreen';
import Products_Screen from './screen/Products_Screen';
import ProductDetailScreen from "./screen/ProductDetailScreen"
import Layout from "./Layout/Layout"
import NotFound404 from "./screen/NotFound404"
import Topics from "./screen/Deneme"
import Favorite from "./screen/Favorite"


/*Auth */
import Login from "./screen/Login"
import Register from "./screen/Register"
/*Admin */
import Sidebar from "./component/Sidebar"
import AdminAddProduct from "./screen/AdminAddProduct"
import AdminEditProduct from "./screen/AdminEditProduct"

/*Route */
import PrivateRoute from "./route/Private"
import PublicRoute from "./route/Public"



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>

          <Route exact path="/Kadın/:isim"  >
            <Layout>
              <Products_Screen />
            </Layout>
          </Route>

          <Route exact path="/Kadın/:isim/:productId" >
            <Layout>
              <ProductDetailScreen />
            </Layout>
          </Route>

          <Route path="/Basket/:id?">
            <Layout>
              <BasketScreen />
            </Layout>

          </Route>

          <PublicRoute exact path="/Login" restricted={false} component={Login} />

          <Route path="/Register" exact>
            <Register />
          </Route>


          <PrivateRoute exact path='/AdminAddProduct' component={AdminAddProduct} />

          {/* <Route path="/AdminAddProduct" exact>
            <Sidebar >
              <AdminAddProduct />
            </Sidebar>
          </Route>  */}

          <Route path="/AdminEditProduct" exact>
            <Sidebar >
              <AdminEditProduct />
            </Sidebar>
          </Route>


          <Route path="/Topics" exact>
            <Topics />
          </Route>

          <Route path="/Favorite" exact>
            <Layout>

              <Favorite />
            </Layout>

          </Route>


          <Route path='*' exact={true} component={NotFound404} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

