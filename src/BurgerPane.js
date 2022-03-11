import { Component } from 'react'
import Ingredient from './Ingredient'
import RemoveButton from './RemoveButton'

export default class BurgerPane extends Component {
  render(){
    const burgerIngredients = this.props.ingredients.map(ingredient=>{
      return <Ingredient ingredient={ingredient} />
    }).reverse()
    return(
      <div>
        <h1>current burg</h1>
        <div onClick={this.props.removeIngredient}>
          {burgerIngredients}
        </div>

        <RemoveButton 
          clearBurger={this.props.clearBurger}
        />
      </div>
    )
  }
}