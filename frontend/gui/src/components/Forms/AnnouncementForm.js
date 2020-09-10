import React, { Component } from 'react'

import axios from 'axios'

class AnnouncementForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'title': "",
            'announcement': "",
            'date': "",
            'author': "Pani Doktorka"
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(event) {

        const title = event.target.elements.title.value;

        axios.post('http://127.0.0.1:8000/api/',
            this.state)


    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input
                    type='text'
                    name='title'
                    placeholder='Názov'
                    onChange={this.onChange}
                />
                <input
                    type='text'
                    name='announcement'
                    placeholder='Oznam'
                    onChange={this.onChange}

                />
                <input
                    type='date'
                    name='date'
                    onChange={this.onChange}

                />
                <button type='submit'>
                    Vytvoriť
                </button>
            </form>


        )
    }
}

export default AnnouncementForm
