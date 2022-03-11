import { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class App extends Component {
  state = {
    allIngredients: ['bun','lettuce','tomato','beef patty','chicken patty','onion ring','a lil sauce','slice of cheddar','fried egg','bacon','blue cheese','balsamic glaze'],
    burgerIngredients: []
  }
  addToBurger = (e) =>{
    const ingredientToAdd = e.target.innerText.toString()
    console.log(`tried to add ${ingredientToAdd} to the burg`)
    let newArrayOfIngredients = this.state.burgerIngredients
    newArrayOfIngredients.push(ingredientToAdd)
    //need to add clicked element into state.burgerIngredients array, set state correctly
    this.setState({
      burgerIngredients: newArrayOfIngredients
    })
  }

  removeFromBurger = (e) =>{
    console.log(`tried to remove ${e.target.innerText} from the burg`)
    //need to remove from state.burgerIngredients and set state correctly

  }

  clearBurger = e =>{
    console.log('tryin to empty this burg out')
    this.setState({burgerIngredients:[]})
  }

  render(){
    return(
      <>
        <IngredientList 
          ingredients={this.state.allIngredients}
          addToBurger={this.addToBurger}
        />
        <BurgerPane 
          removeIngredient={this.removeFromBurger}
          ingredients={this.state.burgerIngredients}
          clearBurger={this.clearBurger}
        />
      </>
    )
  }
}