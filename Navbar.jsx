import React, { Component } from 'react';
import "./Style.css";
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/LoginPage">Peersona</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active badge badge-pill badge-light" href="/LoginPage">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link badge badge-pill badge-light" href="/LoginPage">About us</a>
                        <a className="nav-item nav-link badge badge-pill badge-light" href="/LoginPage">FAQ</a>
                        <a className="nav-item nav-link badge badge-pill badge-light dropdown-item" href="/LoginPage">Login</a>
                    </div>
                </div>
            </nav>

        );
    }
}