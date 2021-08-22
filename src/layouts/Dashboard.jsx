import React from "react";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";

import { ToastContainer } from "react-toastify";

import Navi from './Navi';

//!!Page import
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import ProductAdd from "../pages/ProductAdd";
import ProductList from "../pages/ProductList";

import Login from '../pages/account/Login';
import Register from '../pages/account/Register';
import RegisterEmployer from '../pages/account/RegisterEmployer';
import CandidatesListView from '../pages/candidates/candidatesListView';

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
            <Navi/>
      <Grid>
        <Grid.Row>
          {/* <Grid.Column width={4}>
            <Categories />
          </Grid.Column> */}
          <Grid.Column width={16}>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/registerEmployer" component={RegisterEmployer}/>

            <Route exact path="/candidatesListView" component={CandidatesListView}/>
            {/* <Route exact path="/cvs" component={Cvs}/>
            <Route exact path="/cvs/:id" component={CvDetail}/>
            <Route exact path="/employers" component={Employers}/>
            <Route exact path="/employers/:id" component={EmployerDetail}/> */}
            {/* <Route exact path="/jobads" component={JobAds}/>
            <Route exact path="/jobAdCreate" component={JobAdCreate}/>
            <Route exact path="/jobads/:id" component={JobAdDetail}/>
            <Route exact path="/jobAdFavorites" component={JobAdFavorites}/> */}


            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
