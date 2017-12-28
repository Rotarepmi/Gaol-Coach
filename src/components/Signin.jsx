import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {firebaseApp} from '../firebase';

class Signin extends Component {
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

  signIn() {
    const {email, password} = this.state;
    const {history} = this.props;
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(
      () => {history.push('/app')},
      error => {this.setState({error})}
    );
  }

  render() {
    return(
      <div>
        <form className='form-inline'>
          <h2>Sign In</h2>
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
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </form>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Dont have an account? - Sign Up!</Link></div>
      </div>
    )
  }
}

export default Signin;
