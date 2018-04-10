import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import logo from '../images/logo.svg';
import Gallery from './Gallery';

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong !');
            }
        })
        .then(json => {
            // console.log(json);
            let { items } = json;
            this.setState({items})
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <div className="Global">
                <header className="App-header">
                    <h2 className="App-title">
                    <img src={logo} className="App-logo" alt="react logo" style={{width:'100px'}}/>
                    React Books Explorer !
                    </h2>
                </header>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a book"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {this.search();}
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items} />
            </div>
        )
    }
}

export default Global;