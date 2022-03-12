import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import { useState } from 'react'

export default function App () {
  /**
   * change to useState
   */
  const [allIngredients, setAllIngredients] = useState(['bun','lettuce','tomato','beef patty','chicken patty','onion ring','a lil sauce','slice of cheddar','fried egg','bacon','blue cheese','balsamic glaze'])

  const [burgerIngredients, setBurgerIngredients] = useState([])

  /**
   * adjust with setState
   */
  const addToBurger = (ingredientToAdd) =>{
    
    console.log(ingredientToAdd)
    let newArrayOfIngredients = burgerIngredients.slice()
    newArrayOfIngredients.push(ingredientToAdd)
    setBurgerIngredients(newArrayOfIngredients)
  }
 

  const removeFromBurger = (e) =>{
    console.log(`tried to remove ${e.target.innerText} from the burg`)
    console.log(e.target.key)
    //need to remove from state.burgerIngredients and set state correctly

  }

  const clearBurger = e =>{
    console.log('tryin to empty this burg out')
    setBurgerIngredients([])
  }

    return(
      <>
        <IngredientList 
          ingredients={allIngredients}
          addToBurger={addToBurger}
        />
        <BurgerPane 
          removeIngredient={removeFromBurger}
          ingredients={burgerIngredients}
          clearBurger={clearBurger}
        />
      </>
    )
}