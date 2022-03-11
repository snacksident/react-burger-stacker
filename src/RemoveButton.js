import { Component } from 'react'

export default class RemoveButton extends Component{
    render(){
        return(
            <button onClick={this.props.clearBurger}>ditch this burg.</button>
        )
    }
}