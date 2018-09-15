import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import transitionHandler from '../util/transitionHandler'

import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';

const Contact = () => (
  <div className='full contact'>
    <div className='left'></div>
    <div className='right'></div>
  </div>
)

class App extends Component {

  state = {
    routesAreTransitioning: false
  } 

  componentDidMount() {
    console.log(`App componentDidMount`);
    const { location, addHistory } = this.props;
    addHistory(location);
  }

  childFactoryCreator = () => {
    const { from, to } = this.props.historyObject;
    const classNames = transitionHandler({from, to});
    return (
      (child) => {
        return ( React.cloneElement(child, { classNames }) )
      }
    );
  }

  render() {
    const { history, location } = this.props;
    const { routesAreTransitioning } = this.state;

    // handle routes transitioning blocking
    if (!this.unblock && routesAreTransitioning) {
      this.unblock = history.block();
    }

    // handle unblocking 
    if (this.unblock && !routesAreTransitioning) {
      this.unblock();
      this.unblock = null;
    }

    return (
      <div className="App">
        <Navbar currentPath={location.pathname} />
        <TransitionGroup component={null} childFactory={this.childFactoryCreator()}>
          <CSSTransition
            // Animate by pathname
            key={location.pathname}
            timeout={5000}
            onEnter={() => console.log('App.js anim') || this.setState(() => ({routesAreTransitioning: true}))}
            onExited={() => this.setState(() => ({routesAreTransitioning: false}))}
          >
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route exact path="/projects" render={() => <Redirect to="/projects/all" />} />
              <Route path='/projects/:tag' render={ (props) => <Projects {...props} />} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
