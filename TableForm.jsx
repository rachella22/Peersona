import React, { Component } from 'react'
import { Table, Form } from 'react-bootstrap'
import "./TableForm.css"
import axios from 'axios'
export default class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Openness: '',
            Conscientiousness: '',
            Extraversion: '',
            Agreeableness: '',
            Neuroticism: '',
            isSubmitted: '',
            post: [],
            id1: '',
            id2: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value, id1: this.props.id1, id2: this.props.id2 })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://192.168.43.70:8080/peers', this.state)
            .then(response => {
                console.log('hai', response);
                if (response.data.ok) {
                    window.location.reload()
                } else {
                    alert(response.data.status)
                }
            })
            .catch(error => {
                console.log("salah woi");
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Table >
                    <thead className="container-fluid thead-light col-md-12"></thead>

                    <thead>
                        <tr>
                            <th class="col-xs-12">Penilaian</th>
                            <th class="col-xs-12">Kiri</th>
                            <th class="col-xs-12">Tidak Tahu</th>
                            <th class="col-xs-12">Kanan </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><b>Openness</b></td>
                            <td><input type="radio" className="radio in-line" name="Openness" value="1" onChange={this.handleChange} /></td>
                            <td><input type="radio" className="radio in-line" name="Openness" value="2" onChange={this.handleChange} /></td>
                            <td><input type="radio" className="radio in-line" name="Openness" value="3" onChange={this.handleChange} /></td>

                        </tr>
                        <tr>
                            <td><b>Conscientiousness</b></td>
                            <td><input type="radio" className="radio in-line" name="Conscientiousness" value="1" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Conscientiousness" value="2" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Conscientiousness" value="3" onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><b>Extraversion</b></td>
                            <td><input type="radio" className="radio in-line" name="Extraversion" value="1" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Extraversion" value="2" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Extraversion" value="3" onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><b>Agreeableness</b></td>
                            <td><input type="radio" className="radio in-line" name="Agreeableness" value="1" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Agreeableness" value="2" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Agreeableness" value="3" onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><b>Neuroticism</b></td>
                            <td><input type="radio" className="radio in-line" name="Neuroticism" value="1" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Neuroticism" value="2" onChange={this.handleChange} /> </td>
                            <td><input type="radio" className="radio in-line" name="Neuroticism" value="3" onChange={this.handleChange} /> </td>
                        </tr>
                    </tbody>
                    <button className="btnSubmit col-xl-12" >Submit</button>

                </Table >
            </Form >
        )
    }
}


