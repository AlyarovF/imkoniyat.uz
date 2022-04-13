import React, { Component } from 'react'

export default class CrContent extends Component {
    constructor(props) {
        super(props)
    }

    htmlDecode(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    render() {
        let Media
        if (this.props.mediatype === "youtube") {
            Media = <iframe width="100%" height="415" src={`https://www.youtube.com/embed/${this.props.src}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        } else if (this.props.mediatype === "image") {
            Media = <img src={this.props.src} width="100%" />
        } else if (this.props.mediatype === "video") {
            Media = <video width="100%" controls><source src={this.props.src} type="video/mp4" /></video>
        }

        if (!Media) {
            return (
                <div className='content-item'>
                    <div className='text'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.caption}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='content-item'>
                    <div className='media'>
                        {Media}
                    </div>
                    <div className='text'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.caption}</p>
                    </div>
                </div>
            )
        }
    }
}
