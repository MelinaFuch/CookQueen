import styles from "./Home.module.css";
import SliderCard from "../../../components/Slider/SliderCard";
import Card from "../../../components/Card/Card";
import NavBar from "../../../components/NavBar/NavBar";
import { useGetRecipesQuery } from "../../../redux/recipes/recipeApi";

export default function inicio() {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();
  const allRecipes = recipes?.data;

  const renderRecipes = (allRecipes, cantidad) => {
    return allRecipes.slice(2, cantidad).map((recipe) => {
      return <SliderCard recipe={recipe} key={recipe._id} />;
    });
  };
  if (1 == 1) return 1;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <NavBar />
      <div>
        <SliderCard recipes={allRecipes} />;
      </div>
      <Card recipes={allRecipes} />
      <div>
        <h1 className={styles.title}>¡Novedades!</h1>
        <Card recipes={allRecipes} />
      </div>
      <div>
        <h1 className={styles.title}>¡Para desayunar/merendar rico!</h1>
        <Card recipes={allRecipes} />
      </div>
      <div>
        <h1 className={styles.title}>¡A almorzar!</h1>
        <Card recipes={allRecipes} />
      </div>
    </div>
  );
}
