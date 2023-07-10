// import Layout from "../../../components/Layout";
// import Search from "../../../components/Search/Search";
import Image from "next/image";
import styles from "./Home.module.css";
import SliderCard from "../../../components/Slider/SliderCard";
import Card from "../../../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Recipe from "../../../models/Recipe";
import conectionDB from "../../../lib/dbConnect";

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
  };
  // const recipes = data.results;

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.container_logo}>
          <Image
            className={styles.logo}
            src="/img/cookqueen.jpg"
            width={204}
            height={68}
            alt="logo"
          />
        </div>
        <div className={styles.nav_input}>
          <input
            type="text"
            placeholder="       Busca ingredientes o recetas..."
            maxLength="35"
            autoComplete="off"
            className={styles.input_text}
          />
          <Image
            src="/img/buscar.png"
            width={64}
            height={64}
            alt="lupa"
            className={styles.lupa}
          />
        </div>
        <div>
          <Image
            src="/img/barra-nav.svg"
            width={118}
            height={118}
            alt="barra-nav"
          />
        </div>
      </nav>
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
