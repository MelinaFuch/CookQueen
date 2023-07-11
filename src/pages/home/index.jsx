import styles from "./Home.module.css";
import SliderCard from "../../../components/Slider/SliderCard";
import Card from "../../../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Recipe from "../../../models/Recipe";
import conectionDB from "../../../lib/dbConnect";
import NavBar from "../../../components/NavBar/NavBar";

export default function inicio({ recipess }) {
  const renderRecipes = (allRecipes, cantidad) => {
    return allRecipes.slice(0, cantidad).map((recipe) => {
      return <SliderCard recipe={recipe} key={recipe._id} />;
    });
  };
  // const renderCards = (allRecipes, cantidad) => {
  //   return allRecipes.slice(0, cantidad).map((recipe) => {
  //     return <Card recipe={recipe} key={recipe.id} />;
  //   });
  // };

  const settings = {
    dots: true,
    infinite: true,
    autoPlaySpeed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    width: "100%",
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div>
        <Slider className={styles.slider} {...settings}>
          {renderRecipes(recipess, 5)}
        </Slider>
      </div>
      <Card recipes={recipess} />
      <div>
        <h1 className={styles.title}>¡Novedades!</h1>
        <Card recipes={recipess} />
      </div>
      <div>
        <h1 className={styles.title}>¡Para desayunar/merendar rico!</h1>
        <Card recipes={recipess} />
      </div>
      <div>
        <h1 className={styles.title}>¡A almorzar!</h1>
        <Card recipes={recipess} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    await conectionDB();

    const res = await Recipe.find();

    const recipess = res.map((mov) => {
      const recipe = mov.toObject();
      recipe._id = `${recipe._id}`;
      recipe.date = `${recipe.date}`;

      return recipe;
    });

    return { props: { recipess } };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: "¡Error!" } };
  }
};
