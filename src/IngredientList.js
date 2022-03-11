import { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
  render(){
    const allIngredients = this.props.ingredients.map(ingredient=>{
      return <Ingredient ingredient={ingredient} />
    })
    return(
        <div htmlClass="">
            <h1>ingredient choices</h1>
            <div onClick={this.props.addToBurger}>
              {allIngredients}
            </div>
        </div>
    )
  }
}