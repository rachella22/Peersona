import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import './Cards.css';
import Youtube from 'react-youtube';
import TableForm from "./TableForm";
import NavbarLogout from './NavbarLogout';
import axios from 'axios';



export default class PeersForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playingVideo: null,
            post: [],
            isCorrect: ''
        }
        axios.get('http://192.168.43.70:8080/peers', this.state)
            .then((response) => {
                console.log("hello", response.data)
                this.state.url1 = response.data.url1
                this.state.url2 = response.data.url2
                this.state.id1 = response.data.id1
                this.state.id2 = response.data.id2
                console.log(this.state.url1)
                console.log(this.state.url2)
                console.log(this.state.id1)
                console.log(this.state.id2)
            })
            .catch((error) => {
                console.log(error);
            });
        this.onPlay = this.onPlay.bind(this);
        this.onPause = this.onPause.bind(this);
    }

    getAPI = () => {
        axios.get('http://192.168.43.70:8080/peers', this.state)
            .then((response) => {
                this.setState({
                    post: response.data

                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getAPI();
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://192.168.43.70:3000/peers', this.state)
            .then(response => {
                console.log('hai', response.data.status);
            })
    }
    onReady(event) {
        //access to playes in all event handles via event.target
        event.target.pauseVideo();
    }
    onPlay(event) {
        if (this.state.playingVideo != null) {
            this.state.playingVideo.pauseVideo();
        }
        this.setState({ playingVideo: event.target });
    }
    onPause(event) {
        if (this.state.playingVideo === event.target) {
            this.setState({ playingVideo: null });
        }
    }
    render() {
        const opts = {
            playersVars: {
                className: "embed-responsive-item",
                scrolling: "no",
                allowingFullScreen: true,
                autoPlay: false
            }
        }
        const id1 = this.state.id1;
        const id2 = this.state.id2;
        return (
            < div >
                <NavbarLogout />
                <CardDeck>
                    <Card>
                        <div className="col-xs-12 embed-responsive-16by9" id="video1" name="video1" />
                        <Youtube videoId={this.state.url1} className="embed-responsive-item" opts={opts} onReady={this.onReady} onPlay={this.onPlay} onPause={this.onPause} />
                        {/* <input type="text" value={this.state.id1}></input> */}
                        {/* <input type="text" value={this.state.id2}></input> */}
                    </Card>
                    <Card>
                        <div class="col-xs-12" className="embed-responsive-16by9" id="video2" name="video2" />
                        <Youtube videoId={this.state.url2} opts={opts} onReady={this.onReady} onPlay={this.onPlay} onPause={this.onPause} />
                    </Card>

                </CardDeck>
                <TableForm id1={id1} id2={id2} />
            </div >
        )
    }
}