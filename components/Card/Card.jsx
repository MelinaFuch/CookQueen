// import Link from "next/link";
import styles from "./Card.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function card({ recipes }) {
  // const recipes= data.results;
  const settings = {
    autoPlaySpeed: 500,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings} className={styles.mySlider}>
      {recipes.map((recipe, index) => (
        <div className={styles.card} key={recipe._id}>
          <div>
            <img
              className={styles.image}
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <div>
            <p className={styles.name}>{recipe.title}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
