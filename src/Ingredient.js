import { Component } from 'react'

export default class Ingredient extends Component {
  render(){
    return(
      <div>
        {this.props.ingredient}
      </div>
    )
  }
}