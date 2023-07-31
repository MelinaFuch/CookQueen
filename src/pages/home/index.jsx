import styles from "./Home.module.css";
import SliderCard from "../../../components/Slider/SliderCard";
import Card from "../../../components/Card/Card";
import NavBar from "../../../components/NavBar/NavBar";
import { useGetRecipesQuery } from "../../../redux/recipes/recipeApi";
import { useSelector } from "react-redux";
import FilterRecipes from "../../../components/FilterRecipes/FilterRecipes";
import { useEffect } from "react";

export default function inicio() {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();
  const allRecipes = recipes?.data;

  const filteredRecipes = useSelector((state) => state.recipes);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <NavBar />
      {filteredRecipes?.length || filteredRecipes?.length !== 0 ? (
        <div>
          <FilterRecipes />
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
}
