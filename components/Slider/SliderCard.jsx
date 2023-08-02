import Link from "next/link";
import styles from "./Slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function slider({ recipes, key }) {
  const settings = {
    dots: true,
    infinite: true,
    autoPlaySpeed: 300,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    width: "100%",
  };

  return (
    <Slider className={styles.slider} {...settings}>
      {recipes.slice(1, 6).map((recipe) => (
        <div className={styles.card}>
          <Link href="#">
            <img
              className={styles.image}
              src={recipe.image}
              alt={recipe.name}
            />
          </Link>
          <h1 className={styles.title}>{recipe.title}</h1>
        </div>
      ))}
    </Slider>
  );
}
