import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class PeersRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            isRegistered: ''

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://192.168.43.70:8080/peers/register', this.state)
            .then(response => {
                console.log('hai', response.data.ok);
                console.log(response.data);
                if (response.data.ok) {
                    this.setState({ isRegistered: true })
                } else {
                    alert(response.data.status)
                }
            })
            .catch(error => {
                console.log("hi");
            })
    }

    render() {
        if (this.state.isRegistered) {
            return <Redirect to={"/LoginPage"} />
        }
        return (
            <form onSubmit={this.handleSubmit}  >
                <div className="col-xl-12" style={{ textAlign: "center" }}>
                    <div className="container">
                        <div className="col-sm-12 col-lg-12">
                            <div className="inner-container">
                                <h2> Peers Registration</h2>
                                <div className="form-group">
                                    <div className="col-lg">
                                        <div className="p-5">
                                            <form id="signup-form">
                                                <div className="form-group">
                                                    <div className="form-label-group">
                                                        <input type="text" id="firstname" name="firstname" className="form-control" placeholder="Enter First Name" onChange={this.handleChange} />
                                                        <label htmlFor="firstname"></label>
                                                        {this.state.firstnameError ? <span style={{ color: "red" }}>Please enter your first name</span> : ''}
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-label-group">
                                                        <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Enter Last Name" onChange={this.handleChange} />
                                                        <label htmlFor="lastname"></label>
                                                        {this.state.lastnameError ? <span style={{ color: "red" }}>Please enter your last name</span> : ''}
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-label-group">
                                                        <input type="email" id="email" name="email" className="form-control" placeholder="Enter E-mail Address" onChange={this.handleChange} />
                                                        <label htmlFor="email"></label>
                                                        {this.state.emailError ? <span style={{ color: "red" }}>Please enter valid email address</span> : ''}
                                                    </div>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="username" name="username" className="form-control" placeholder="Username" onChange={this.handleChange} />
                                                    <label htmlFor="Username"></label>
                                                    {this.state.lastnameError ? <span style={{ color: "red" }}>Please enter your username</span> : ''}
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-label-group">
                                                        <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
                                                        <label htmlFor="password"></label>
                                                        {this.state.passwordError ? <span style={{ color: "red" }}>Please enter correct password</span> : ''}
                                                    </div>
                                                </div>
                                                <button className="button-container btnSubmit" >Register</button>
                                                <br></br>
                                                <br></br>
                                                <Link to="/ForgotPassword">
                                                    <div
                                                        type="text">
                                                        <p>Forgot your password?</p>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div
                                                        type="text">
                                                        <p>Cancel</p>

                                                    </div>
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </form>
        );
    }
}