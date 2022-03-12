import Ingredient from "./Ingredient"
import RemoveButton from "./RemoveButton"

export default function BurgerPane(props) {
    const burgerIngredients = props.ingredients.map((ingredient, index) => {
            return (
                <div key={`burger-ingredient-${index}`}>
                    <Ingredient ingredient={ingredient} />
                </div>
            )
        })
        .reverse()
    return (
        <section>
            <h1>current burg</h1>
            <section 
              className="burger-pane" 
              onClick={props.removeIngredient}>
                {burgerIngredients}
            </section>

            <RemoveButton clearBurger={props.clearBurger} />
        </section>
    )
}
