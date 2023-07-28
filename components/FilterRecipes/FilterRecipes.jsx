import { useSelector } from "react-redux";

function FilterRecipes() {
  const filteredRecipes = useSelector((state) => state.recipes);
  return (
    <div>
      {console.log(filteredRecipes.data)}
      {filteredRecipes?.data
        ? filteredRecipes?.data.map((recipe) => (
            <div>
              <h1>{recipe.title}</h1>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))
        : "holis"}
    </div>
  );
}

export default FilterRecipes;
