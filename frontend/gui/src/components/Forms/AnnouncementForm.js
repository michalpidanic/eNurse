import React, { Component } from 'react'

import axios from 'axios'

export default class AnnouncementForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'title': "",
            'announcement': "",
            'date': "",
            'author': "Pani Doktorka",
            'id': "",
            'request_type': ""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(event) {

        const title = event.target.elements.title.value;
        event.preventDefault();
        /*axios.post('http://127.0.0.1:8000/api/',
            this.state)*/

        console.log(this.state)


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
                /> <br />
                <input
                    type='text'
                    name='announcement'
                    placeholder='Oznam'
                    onChange={this.onChange}

                /><br />
                <input
                    type='date'
                    name='date'
                    onChange={this.onChange}

                /><br />
                <input
                    type='text'
                    name='id'
                    onChange={this.onChange}

                /><br />
                <select
                    name="request_type"
                    onChange={this.onChange}>
                    <option value="post">Pridať</option>
                    <option value="delete">Zmazať</option>
                    <option value="put">Upraviť</option>
                </select>
                <button type='submit'>
                    Vytvoriť
                </button>
            </form>


        )
    }
}
