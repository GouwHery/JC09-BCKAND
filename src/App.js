import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ManageMovie from './components/ManageMovie';
import Header from './components/Header';
import Home from './components/Home';
// import ManageCategory from './components/ManageCategory';
// import ConnectMovieCategory from './components/ConnectMovieCategory';


class App extends Component {

  render() {
    return (
      <div>
        <Header navBrand={'MoviePurwadhika'} />
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/managemovie" component={ManageMovie} />
            {/* <Route path="/managecategory" component={ManageCategory} />
            <Route path="/connectmc" component={ConnectMovieCategory} /> */}
          </div>
      </div>
    )
  }
}

export default App;
