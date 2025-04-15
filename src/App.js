import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Test from './components/TestComponent';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            $({store.getState().dishes.filter((dish) => dish.featured)[0].name})
            <Test />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

//$({store.dishes.filter((dish) => dish.featured)[0]})

/*
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
    );
  }
}
*/

export default App;
