import Recipe from "../../../../models/Recipe";
import conectionDB from "../../../../lib/dbConnect";
import Link from "next/link";
import style from "./index.module.css";

function recipeDetail({ success, error, recipe }) {
  if (!success) {
    return (
      <div className="container text-center my-5">
        <h1>{error}</h1>
        <Link href={"/"}>
          <p className="btn btn-success">Volver</p>
        </Link>
      </div>
    );
  }

  const Ingredients = recipe.ingredients;

  const Description = recipe.description;

  const recipeIngredients = Ingredients.split("\n");
  const recipeDescription = Description.split("\n");
  return (
    <div className={style.container}>
      {/* {console.log(recipe)} */}
      <div className={style.top}>
        <h5 className={style.title}>{recipe.title}</h5>
        <img src={recipe.image} alt={recipe.title} className={style.images} />
      </div>
      <div className={style.left}>
        <div className={style.container_left}>
          <p className={style.subtitle}>Ingredientes</p>
          {/* <p className={style.first_size}>{recipe.ingredients}</p> */}
          <ul className={style.container_ul}>
            {recipeIngredients.map((e) => (
              <li key={e} className={style.first_size}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.container_right}>
          <p className={style.subtitle}>Paso a Paso</p>
          {/* <p className={style.first_size}>{recipe.description}</p> */}
          <ol className={style.container_ol}>
            {recipeDescription.map((e) => (
              <li key={e} className={style.first_size}>
                {e}
              </li>
            ))}
          </ol>
          {recipe.video ? <p> Existo</p> : <p>No existo</p>}
        </div>
      </div>
    </div>
  );
}

export default recipeDetail;

export const getServerSideProps = async ({ params }) => {
  try {
    await conectionDB();
    const recipe = await Recipe.findById(params.id).lean();
    if (!recipe)
      return { props: { success: false, error: "Receta no encontrada" } };
    recipe._id = `${recipe._id}`;
    recipe.date = `${recipe.date}`;

    return { props: { success: true, recipe } };
  } catch (error) {
    console.log(error);
    if (error.kind === "ObjectId") {
      return { props: { success: false, error: "Id no valido" } };
    }
    return { props: { success: false, error: "Error de servidor" } };
  }
};
