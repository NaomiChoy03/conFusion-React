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

// withRouter replacement from internet
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
        return (
            <Component
            {...props}
            router={{ location, navigate, params }}
            />
        );
    }
    
    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    render() {
        // New code
        /*
        const HomePage = () => {
            return(
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        // New code
        const DishWithId = ({match}) => {
            const {dishId} = useParams();
            return(
                // <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                // comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
            );
        };
        */
        
        // OG before props change
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = () => {
            const {dishId} = useParams();
            return(
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId,10))}
                />
            );
        };

        return (
            /*
            // Ignore this code
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                    <Route path='/aboutus' element={<div>About Us</div>} />
                    <Route path='/contactus' element={<div>Contact Us</div>} />
                    <Route path="/*" element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
            */
           // Old code (works)
           /*
            <div>
                <Header />
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' element={<DishWithId />} />
                    <Route path='/aboutus' element={<div>About Us</div>} />
                    <Route exact path='/contactus' element={<Contact />} />
                    <Route path="/*" element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
            */

            //New code (test)
            <div>
                <Header />
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route exact path='/menu' element={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' element={<DishWithId />} />
                    <Route exact path='/aboutus' element={() => <div>test 1</div>/*<About leaders={this.props.leaders} />*/} />
                    <Route exact path='/contactus' element={<Contact />} />
                    <Route path="/*" element={<HomePage />} />
                </Routes>
                <Footer />
            </div>

            // New code
            /*
            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Redirect to="/home" />
                </Switch>
            </div>*/
        );
    }
}

//export default withRouter(connect(mapStateToProps)(Main));
export default connect()(Main);

//export default Main;