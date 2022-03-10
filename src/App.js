import { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class App extends Component {
  render(){
    return(
      <>
        <h1>this the app</h1>
        <IngredientList />
        <BurgerPane />
      </>
    )
  }
}