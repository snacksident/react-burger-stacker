import Ingredient from './Ingredient'

export default function IngredientList (props) {
    const allIngredients = props.ingredients.map((ingredient,index)=>{
      return <div 
          key={`ingredient-list-${index}`}>
          <Ingredient 
            ingredient={ingredient} 
            addToBurger={props.addToBurger} />
        </div>
    })
    return(
        <section className="ingredient-list">
            <h1>ingredient choices</h1>
            <div>
              {allIngredients}
            </div>
        </section>
    )
}