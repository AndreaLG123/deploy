import React, { Component } from 'react';
import axios from 'axios';

class App extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            gatos: []
        }
    }

    async componentDidMount(){
        const res = await axios.get('/api/gatos');
        this.setState({
            gatos: res.data
        })
    }

    desplegarGatos = () =>(
        this.state.gatos.map((gato, key) => (
            <li key={key}>
                { gato.nombre }
            </li>
        ))
    );

    render(){        
        return (
            <div>
              Lista de gatos:
              <ul>
                { this.desplegarGatos() }
              </ul>
            </div>
        );
    }
}

export default App;