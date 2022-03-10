import { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
  render(){
    return(
        <div>
            <h1>ingredient list</h1>
            <ul>
                <li><Ingredient /></li>
            </ul>
        </div>
    )
  }
}