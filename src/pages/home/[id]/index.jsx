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

  const prueba1 =
    "195 grs harina leudante\n150 grs azúcar\n1 huevo\n80 ml aceite vegetal\n120 ml leche\n100 grs arándanos\n1 cda Esencia de vainilla\n1 cdta polvo para hornear\nAzúcar extra para espolvorear cada muffins antes de llevarlos al horno\nPirotines";

  const prueba2 =
    "Colocar en un bowl la manteca y el azúcar. Batir a mano o con batidora eléctrica hasta obtener una crema.\nAñadir los huevos, esencia de vainilla y batir nuevamente para incorporarlos.\nColocar el polvo de hornear junto con la harina y tamizarlos dentro del bowl de a poco, intercalando con la leche a medida que se incorpora.\nAñadir los arándanos y mezclar con espátula para incorporarlos.\nDisponer un molde para muffins, colocar “pirotines” y comenzar a rellenar sin llegar al borde del pirotín.\nUna vez que todos los pirotines están rellenos, preparar el crumble.En un bowl chico, colocar todos los ingredientes del Crumble (manteca, harina y azúcar).Mezclar haciendo presión con los dedos para evitar generar calor que funda la manteca.Se debe obtener un “arenado”.Cubrir cada muffin con un poco del crumble.\nHornear a temperatura media (180ºC) durante 20 minutos.\nRetirar, desmoldar, dejar enfriar y disfrutar de estos deliciosos Muffins!!";

  const prueba3 = prueba1.split("\n");
  const prueba4 = prueba2.split("\n");
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
            {prueba3.map((e) => (
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
            {prueba4.map((e) => (
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
