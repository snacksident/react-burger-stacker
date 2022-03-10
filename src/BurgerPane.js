import { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
  render(){
    return(
      <div>
        <h1>this da burger pane</h1>
        <ul>
          <li><Ingredient /></li>
          <li><Ingredient /></li>
        </ul>
      
      </div>
    )
  }
}