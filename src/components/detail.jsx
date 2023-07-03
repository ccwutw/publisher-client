import React, { Component} from 'react';
import { Link } from 'react-router-dom'

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            book: {},
            loading: true
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/api/books/' + this.props.match.params.isbn)
        .then(res => res.json())
        .then(data =>
            this.setState({
                book: data,
                loading: false
            }))
    }
    render(){
        if (this.state.loading){
            return <p>cargando la información...</p>
        }
        return (
            <div>
                <h1>DETALLE</h1>
                <small>{this.props.match.params.isbn}</small>
                <br></br>
                <img src={this.state.book.cover} alt='book-cover'></img>
                <h2>{this.state.book.title}</h2>
                <h3>{this.state.book.subtitle}</h3>
                <p>{this.state.book.description}</p>
                <ul>
                {this.state.book.authors.map(a => <li>{a}</li>)}
                </ul>
                <Link to='/listing'><button>Volver al listado</button></Link>
                <Link to='/new'><button>Cargar Nuevo ISBN</button></Link>
            </div>
        )
    }
}

export default Detail;