import React, {Component} from 'react';

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleLogin(username, password){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    handleUsername(username){
        this.setState({username: username})
    }

    handlePassword(password){
        this.setState({password: password})
    }
    handleLogin(username, password){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

render(){
    return(
        <div>
            <input type='text' onChange={e => this.handleUsername(e.target.value)} placeholder='username'/>
            <input type='text' onChange={e => this.handlePassword(e.target.value)} placeholder='password'/>
            <button onClick={this.handleLogin} >Submit </button>
        </div>
    )
}
}