import React, { Component } from 'react'

import './Announcement.scss'

export default class Announcement extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            date: this.props.date,
            text: this.props.text
        }
    }



    render() {
        return (
            <div className='announcement'>
                <h2 className='announcementTitle'>
                    {this.state.title}
                </h2>
                <h3 className='announcementDate'>
                    {this.state.date}
                </h3>
                <p className='announcementText'>
                    {this.state.text}
                </p>
            </div>
        )
    }
}
