export default function Ingredient (props) {
    return(
      <div 
        className="ingredient"
        onClick={()=>{props.addToBurger(`${props.ingredient}`)}}
      >
        {props.ingredient}
      </div>
    )
}