import styles from "./Home.module.css";
import SliderCard from "../../../components/Slider/SliderCard";
import Card from "../../../components/Card/Card";
import NavBar from "../../../components/NavBar/NavBar";
import { useGetRecipesQuery } from "../../../redux/recipes/recipeApi";
import { useSelector } from "react-redux";
import FilterRecipes from "../../../components/FilterRecipes/FilterRecipes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function inicio() {
  const [showButtonTop, setShowButtonTop] = useState(false);
  const { data: recipes, isLoading, error } = useGetRecipesQuery();
  const allRecipes = recipes?.data;

  const filteredRecipes = useSelector((state) => state.recipes);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButtonTop(true);
      } else {
        setShowButtonTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <button
        className={`${styles.scrollButton} ${showButtonTop ? styles.show : ""}`}
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  );
}
