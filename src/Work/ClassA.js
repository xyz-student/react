import React, { Component } from 'react'

export default class ClassA extends Component {
    constructor(){
        super()
        this.state={
            name:"reet",
            color:"blue"
        }
    }

    abc=()=>{
        this.setState({name:"ram"})
    }
    render() {
        return (
            <div>
                <button onClick={this.abc} >click here</button>
                <h1>name  {this.state.name} </h1>
            </div>
        )
    }
}
// rcc
