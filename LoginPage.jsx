import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import SweetAlert from 'sweetalert-react';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isSignedIn: ''
        }

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://192.168.43.70:8080/loginPage', this.state)
            .then(response => {
                console.log('hai', response.data.ok);
                console.log(response.data);
                if (response.data.ok) {
                    this.setState({ isSignedIn: true })
                } else {
                    alert(response.data.status)

                }
            })
            .catch(error => {
                console.log("hi");
            })
    }
    
    render() {
        const { email, password } = this.state
        if (this.state.isSignedIn) {
            return <Redirect to={"/PeersForm"} />
        }
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="col-xl-12" style={{ textAlign: "center" }}>
                    <div className="container">
                        <div className="col-sm-12 col-lg-12">
                            <div className="inner-container">
                                <div className="header"> <h1>Welcome Peers!</h1></div>
                                <p> Log in to your account</p>
                                <div className="form-group">
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} className="form-control" placeholder="Enter E-mail Address" />
                                            <label htmlFor="email"></label>

                                        </div>
                                    </div>
                                    <div className="form-group col-sm-12 col-lg-12">
                                        <div className="form-label-group">
                                            <input type="password" id="password" value={password} name="password" onChange={this.handleChange} className="form-control" placeholder="Password" />
                                            <label htmlFor="password"></label>
                                        </div>

                                        <button className="button-container btnSubmit col-md-6 col-md-6">Login</button>
                                    </div>

                                    <br></br>
                                    <br></br>
                                    <Link to="/PeersRegistration">
                                        <button
                                            className="button-container btnSubmit" type="submit">
                                            Register
                              </button>
                                    </Link>
                                    <Link to="/ForgotPassword">
                                        <button
                                            className="button-container btnSubmit" type="submit" >
                                            Forgot Password
                              </button>
                                        <p> <Link to="/">
                                            cancel
                                        </Link>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        );
    }
}

