import React, { Component } from 'react';
import './App.css';
import IncrementDecrement from './IncrementDecrement';
import {connect} from 'react-redux' ;
import ActionType from './Logic/ActionType';

class App extends Component {

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("props passed to App by react-redux",prevProps,prevState);
}

  render() {
    return (
      <div className="App">
        <h1>Increment \ Decrement using Redux</h1>
        <IncrementDecrement count={this.props.cnt} setCount={this.props.countHandler}/>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    cnt : state.count  // this.props.cnt is mapped to state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // --- // this.props.countHandler is mapped to dispatch
    countHandler : payLoad => dispatch({type:ActionType.ADD , payLoad:payLoad})};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

