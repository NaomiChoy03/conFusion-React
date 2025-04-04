import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, Routes, Navigate } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    render() {/*
        const HomePage = () => {
            return (
                <Home />
            )
        }*/

        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
            /*
            <div>
                <Header />
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                    <Route path='/aboutus' element={<div>About Us</div>} />
                    <Route path='/contactus' element={<div>Contact Us</div>} />
                    <Route path="/*" element={<HomePage />} />
                </Routes>
                <Footer />
            </div>*/
        );
    }
}


        /*
        const HomePage = () => {
            return (
                <div>
                    <Header />
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                    <Footer />
                </div>
            );
        }
        */


/*
<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
*/

export default Main;