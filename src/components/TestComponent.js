import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
// import { Switch, Route, Redirect, Routes, Navigate, useParams, withRouter } from 'react-router-dom';
import { Switch, Route, Redirect, Routes, Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { connect } from 'react-redux';


// https://www.dhiwise.com/post/resolve-could-not-find-store-in-either-the-context-or-props
/*
const MyComponent = ({ store }) => {
    if (!store) {
      console.error('Store is not available in MyComponent');
    }
    // Rest of the component logic
    return (<div>test</div>);
   };

*/
const MyComponent = () => {
    return (<div>test</div>);
   };



const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}



//export default withRouter(connect(mapStateToProps)(MyComponent));
//export default connect(mapStateToProps)(MyComponent);
export default connect()(MyComponent);

//export default MyComponent;