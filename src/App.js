import React from 'react';
import './css/style.css';

/* Third party libraries */
import { BrowserRouter , Route} from 'react-router-dom';
import {Provider , connect } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './redux/store';

/* import redux related */
import { fetchHomePageSuccessAsync } from './redux/home/home.actions';


/* import all the container components */
import HomePage from './pages/home/home.container';
import AboutPage from './pages/about/about.container';
import ContactPage from './pages/contact/contact.container';

/* import Header */
import Header from './components/header/header.component';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchHomePageSuccessAsync();
    
  }

  render() {

  return (
    
    <BrowserRouter>
      <div className="App">
      
        <Header/>
        <Route exact path="/" component={HomePage} />
        
      </div>
    </BrowserRouter>
    
  );

  }

}

const mapStateToProps = state => ({
  homeState: state.homeState
})

const mapDispatchToProps = dispatch => ({
  fetchHomePageSuccessAsync: () => dispatch(fetchHomePageSuccessAsync())
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
