import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            profession: "",
            password: "",
            isRegistered: ""

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://192.168.43.70:8080/RegistrationForm', this.state)
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
        const { firstName, lastName, email, username, profession, password } = this.state
        if (this.state.isRegistered) {
            return <Redirect to={"/LoginPage"} />
        }
        return (
            <form onSubmit={this.handleSubmit}  >
                <div className="col-xl-12" style={{ textAlign: "center" }}>
                    <div className="container">
                        <div className="col-md-7 col-lg-12">
                            <div className="inner-container">
                                <h2> Users Registration</h2>
                                <form>
                                    <div className="col-xl">
                                        <div className="form-group">
                                            <div className="form-label-group">
                                                <input type="text" id="firstName" name="firstName" value={firstName} className="form-control" placeholder="First Name" required onChange={this.handleChange} />
                                                <label htmlFor="firstName"></label>
                                                {this.state.fullnameError ? <span style={{ color: "red" }}>The full name field is required.</span> : ''}
                                            </div>
                                            <div className="form-label-group">
                                                <input type="text" id="lastName" name="lastName" value={lastName} className="form-control" placeholder="Last Name" required onChange={this.handleChange} />
                                                <label htmlFor="lastName"></label>
                                                {this.state.fullnameError ? <span style={{ color: "red" }}>The full name field is required.</span> : ''}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-label-group">
                                                <input type="email" id="email" name="email" value={email} className="form-control" placeholder="E-mail Address" required onChange={this.handleChange} />
                                                <label htmlFor="email"></label>
                                                {this.state.emailError ? <span style={{ color: "red" }}>The email field is required.</span> : ''}
                                            </div>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" id="username" name="username" value={username} className="form-control" placeholder="Username" required onChange={this.handleChange} />
                                            <label htmlFor="Username"></label>
                                            {this.state.lastnameError ? <span style={{ color: "red" }}>The username field is required.</span> : ''}
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" id="profession" name="profession" value={profession} className="form-control" placeholder=" Profession" required onChange={this.handleChange} />
                                            <label htmlFor="Occupatin"></label>
                                            {this.state.occupationError ? <span style={{ color: "red" }}></span> : ''}
                                        </div>
                                        <div className="form-group">
                                            <div className="form-label-group">
                                                <input type="password" id="password" name="password" value={password} className="form-control" placeholder="Password" required onChange={this.handleChange} />
                                                <label htmlFor="password"></label>
                                                {this.state.password1Error ? <span style={{ color: "red" }}>The password field is required.</span> : ''}
                                            </div>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                            </div>
                                        </div>
                                        <button className="button-container btnSubmit" type="submit" >Register</button>
                                        <br></br>
                                        <br></br>
                                        <Link to="/ForgotPassword">
                                            <button
                                                className="button-container btnSubmit" type="submit">
                                                Forgot Password
                                             </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div>
            </form>
        )
    }
}
