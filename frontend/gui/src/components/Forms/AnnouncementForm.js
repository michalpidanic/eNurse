import React, { Component } from 'react'

import axios from 'axios'

import './Forms.scss'

export default class AnnouncementForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'title': "",
            'announcement': "",
            'date': "",
            'author': "Pani Doktorka",
            'id': "",
            'request_type': "post"
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }



    onSubmit(event) {
        event.preventDefault()
        axios.get('http://127.0.0.1:8000/api/3').then(response => { console.log(response) })
        switch (this.state.request_type) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/',
                    this.state)
                break
            case 'delete':
                axios.delete('http://127.0.0.1:8000/api/' + this.state.id + '/')
                break
            case 'put':
                axios.put('http://127.0.0.1:8000/api/' + this.state.id + '/',
                    this.state)
                break
        }
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
                <select
                    name="request_type"
                    onChange={this.onChange}>
                    <option value="post">Pridať</option>
                    <option value="delete">Zmazať</option>
                    <option value="put">Upraviť</option>
                </select><br />
                <input
                    type='date'
                    name='date'
                    onChange={this.onChange}

                />
                <input
                    type='text'
                    name='id'
                    placeholder='ID'
                    onChange={this.onChange}

                /><br />
                <textarea
                    type='text'
                    name='announcement'
                    placeholder='Oznam'
                    onChange={this.onChange}

                /><br />
                <button type='submit'>
                    Vytvoriť
                </button>
            </form>
        )
    }
}
