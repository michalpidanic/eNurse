import React, { Component } from 'react'

import axios from 'axios'

import './Announcement.scss'

export default class Announcement extends Component {

    constructor(props) {
        super()

        this.state = {}

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)

    }


    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit() {
        axios.put('http://127.0.0.1:8000/api/' + this.props.id + '/',
            {
                'title': this.props.title,
                'announcement': this.state.announcement,
                'author': this.props.author,
                'date': this.props.date,
            })
    }



    render() {
        return (
            <div className='announcement'>
                <div>
                    <h2 className='announcementTitle'>
                        {this.props.title}
                    </h2>
                    <h3 className='announcementDate'>
                        {this.props.date}
                    </h3>
                    <p className='announcementText'>
                        {this.props.text}
                    </p>
                    <p className='announcementText'>
                        {this.props.author}
                    </p>
                </div>
                <button onClick={() => this.props.delete(this.props.id)}>Zmazat</button>
                <form onSubmit={this.onSubmit} >
                    <textarea
                        type='text'
                        name='announcement'
                        onChange={this.onChange}
                    /><br />
                    <button type='submit'>
                        Editovať
                    </button>
                </form>
            </div>
        )
    }
}
