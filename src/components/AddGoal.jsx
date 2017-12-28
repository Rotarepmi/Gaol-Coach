import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    const {title} = this.state;
    const {email} = this.props.user;
    goalRef.push({email, title});
  }

  render() {
    return(
      <div>
        <form className='form-inline'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Add a goal'
              onChange={event => this.setState({title: event.target.value})}
            />
          </div>
          <button type='button' className='btn btn-success'
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps, null)(AddGoal);
