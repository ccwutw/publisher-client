import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Listing extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount (){
        fetch('http://localhost:8080/api/books')
        .then(res => res.json())
        .then(data => {
            this.setState({
                books: data
            })
        })
    }
    render(){
        const books = this.state.books.map(book => 
            <li key={book.isbn}>
            {book.isbn}
            <Link to={`/detail/${book.isbn}`}><button>VER DETALLE</button></Link>
            </li>)
        return (
            <div>
                <h1>LISTADO</h1>
                <Link to='/new'><button>Nuevo ISBN</button></Link>
                <ul id="books">
                    {books}
                </ul>
            </div>
        )
    }
}

export default Listing;