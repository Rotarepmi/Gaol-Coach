import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        message: ''
      }
    }
  }

  signOut() {
    const {history} = this.props;
    firebaseApp.auth().signOut().then(
      () => {history.push('/signin')},
      error => {this.setState({error})}
    );
  }

  render() {
    return(
      <div>
        <h2>Goal Coach</h2>
        <AddGoal />
        <hr />
        <h3>Goals</h3>
        <GoalList />
        <hr />
        <h3>Complete Goals</h3>
        <CompleteGoalList />
        <hr />
        <button className='btn btn-danger'
          onClick={() => this.signOut()}
        >
          Sign out
        </button>

      <div>{this.state.error.message}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log('state', state);
  return {};
}

export default connect(mapStateToProps, null)(App);
