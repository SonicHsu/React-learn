import Ingredients from "./Ingredients"

export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    

    const ingredientsListItem = ingredients.map((item, index) => {
        return (
            <Ingredients 
            key = {index}
            name = {item} />
        )
    })

    function formOnSubmit(event) {
        event.preventDefault();
        console.log("Form submitted!");
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient");
        console.log(newIngredient)

        ingredients.push(newIngredient)
        console.log(ingredients)
    
    }
    
    return (
        <main>
            <form onSubmit={formOnSubmit}  className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItem}
            </ul>
        </main>
    )
}