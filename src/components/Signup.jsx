import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {firebaseApp} from '../firebase';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    const {email, password} = this.state;
    const {history} = this.props;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(
      () => history.push('/app'),
      error => {this.setState({error})}
    );
  }

  render() {
    return(
      <div>
        <form className='form-inline'>
          <h2>Sign Up</h2>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='email'
              onChange={event => this.setState({email: event.target.value})}
            />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' placeholder='password'
              onChange={event => this.setState({password: event.target.value})}
            />
          </div>
          <button type='button' className='btn btn-primary'
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </form>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? - Sign In!</Link></div>
      </div>
    )
  }
}

export default Signup;
