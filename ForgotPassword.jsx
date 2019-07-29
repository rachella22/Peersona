import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isLoggedOut: ''
        }

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://192.168.43.70:8080/forgot', this.state)
            .then(response => {
                console.log('hai', response.data.ok);
                console.log(response.data);
                if (response.data.ok) {
                    this.setState({ isLoggedOut: true })
                }
                else {
                    alert(response.data.status)
                }
            })
            .catch(error => {
                console.log("hi");
            })
    }

    render() {
        const { email } = this.state
        if (this.state.isLoggedOut) {
            return <Redirect to={"/LoginPage"} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="col-xl-12" style={{ textAlign: "center" }}>
                    <div className="container">
                        <div className="col-sm-12 col-lg-12">
                            <div className="inner-container">
                                <div className="col-lg-12">
                                    <div className="box">
                                    </div>
                                    <h2> Forgot your password?</h2>
                                    <div className="form-group">
                                    </div>
                                    <div className="col-lg">
                                    </div>
                                    <div className="p-5">
                                        <div className="form-group">
                                            <div className="form-label-group">
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Enter E-mail Address" required value={email} onChange={this.handleChange} />
                                                <label htmlFor="email"></label>
                                                {this.state.emailError ? <span style={{ color: "red" }}>Please enter valid email address</span> : ''}
                                            </div>
                                        </div>

                                        <button className="button-container btnSubmit" type="submit">Submit</button>
                                        <br></br>
                                        <br></br>
                                        <Link to="/LoginPage">
                                            <button
                                                className="button-container btnSubmit" type="submit">
                                                Back to Login
                         </button>
                                        </Link>
                                    </div >
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

