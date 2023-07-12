import React, { Component } from 'react'
 
export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'abc',
            age:'40',
            data:this.props.la
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.go}>click here</button>
                <h1>new data from state {this.state.data}</h1>
                <h3>age {this.state.age}</h3>
            </div>
        )
    }
}
// Super() function is to call the constructor of the parent class
