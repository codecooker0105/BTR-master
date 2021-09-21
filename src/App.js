import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from './routes';
import ScrollRestoration from 'react-scroll-restoration';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollRestoration />
        <div className="app">
          <div className="main-layout">
            <Header />
            <div className="main-body">
              <Switch>
                {Routes.map((route, index) => {
                  return ( <Route key={index} path={route.path} exact={route.exact} name={route.name} component={route.component} />)
                })}
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
