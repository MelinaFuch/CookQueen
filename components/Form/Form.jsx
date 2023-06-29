import { useState } from "react";
import { useDispatch } from "react-redux";
import { usePostRecipeMutation } from "../../redux/recipes/recipeApi";

const Form = () => {
    const dispatch = useDispatch();
    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: "",
        category: "",
        image:""
    })

    const [postRecipeMutation] = usePostRecipeMutation(); 

    const handleChange = (event) => {
        const { value, name } = event.target;
        setRecipe({
            ...recipe,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(recipe)
        // dispatch(postRecipeMutation(recipe)); // Utiliza la función mutate del hook
        await postRecipeMutation(recipe);
        alert("todo bien")

    }

    // useEffect(() => {
    //     setRecipe(recipes.find(recipe => recipe.id === params.id));
    // }, [params.id, tasks])

    return (
        <form className="bg-zinc-800 max-w-sm p-4" onSubmit={handleSubmit}>
            <label className="block text-xs font-bold" htmlFor="title">Title:</label>
            <input 
                className="w-full p-2 rounded-md bg-zinc-600 mb-2 mt-2"
                type="text"
                name="title" 
                value={recipe.title} 
                onChange={handleChange} 
                placeholder="title" 
            />
               <label className="block text-xs font-bold" htmlFor="image">Image:</label>
            <input 
                className="w-full p-2 rounded-md bg-zinc-600 mb-2 mt-2"
                type="text"
                name="image" 
                value={recipe.image} 
                onChange={handleChange} 
                placeholder="image" 
        />
           <label className="block text-xs font-bold" htmlFor="category">Category:</label>
            <input 
                className="w-full p-2 rounded-md bg-zinc-600 mb-2 mt-2"
                type="text"
                name="category" 
                value={recipe.category} 
                onChange={handleChange} 
                placeholder="category" 
        />
           <label className="block text-xs font-bold" htmlFor="ingredients">Ingredients:</label>
            <input 
                className="w-full p-2 rounded-md bg-zinc-600 mb-2 mt-2"
                type="text"
                name="ingredients" 
                value={recipe.ingredients} 
                onChange={handleChange} 
                placeholder="ingredients" 
            />
            <label className="block text-xs font-bold" htmlFor="description">Description:</label>
            <textarea 
                className="w-full p-2 rounded-md bg-zinc-600 mb-2 mt-2"
                name="description" 
                value={recipe.description} 
                onChange={handleChange} 
                placeholder="description" 
            />
            <button className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Save</button>
        </form>
    )
}

export default Form;