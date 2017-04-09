import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  // Constructor
  constructor(){
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({ user });
    })
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result=>console.log(`${result.user.email} ha iniciado sensión`))
    .catch(error=>console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout () {
    firebase.auth().signOut()
    .then(()=>console.log(`Ha cerrado sensión`))
    .catch(error=>console.log(`Error ${error.code}: ${error.message}`));
  }

  rendeLoginButton() {
    // if user is logged
    if(this.state.user){
      if(this.state.user.email === 'neftaiof@gmail.com' || this.state.user.email === 'andresriatiga@gmail.com')  {
        return (
          <div>
            <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
            <div>Hola { this.state.user.displayName }</div>
            <button onClick={this.handleLogout}>Salir</button>
          </div>
        )
      } else {
        this.handleLogout()
        return (
          <button onClick={this.handleAuth}>Ingresar</button>
        )
      }

    } else {
      return (
        <button onClick={this.handleAuth}>Ingresar</button>
      )
    }
    // if user is not logged
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Odiseo</h2>
        </div>

        <div className="App-intro">{this.rendeLoginButton()}</div>
      </div>
    );
  }
}

export default App;
