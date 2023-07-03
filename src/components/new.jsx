import React, { Component} from 'react';


class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newIsbn:'',
        }

        this.handleOnChangeInput = this.handleOnChangeInput.bind(this)
    }

    handleOnChangeInput(e){
        this.setState ({
            newIsbn: parseInt(e.target.value)
        })
    }

    saveIsbn(){
        fetch('http://localhost:8080/api/books', {
            method: 'POST',
            body: JSON.stringify({
                isbn: this.state.newIsbn
            }),
            headers:{
                'Content-Type':
                'application/json'

            }
        })
        .then(res => {
            this.props.history.push('/listing')
        })
    }
    render(){
        return (
            <div>
                <h1>NUEVO</h1>
                <input value={this.state.newIsbn} type='text'onChange={this.handleOnChangeInput}></input>
                <button onClick={()=> this.saveIsbn()}>Guardar</button>
            </div>
        )
    }
}

export default New;