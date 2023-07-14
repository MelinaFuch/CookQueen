import Link from "next/link";
import styles from "./Card.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function card({ recipes }) {
  // const recipes= data.results;

  const PrevArrow = (props) => (
    <div className={styles.customPrevArrow} onClick={props.onClick}>
      <i className="fas fa-chevron-left">{"<"}</i>
    </div>
  );

  const NextArrow = (props) => (
    <div className={styles.customNextArrow} onClick={props.onClick}>
      <i className="fas fa-chevron-right">{">"}</i>
    </div>
  );

  const settings = {
    autoPlaySpeed: 500,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className={styles.mySlider}>
      {recipes.map((recipe) => (
        <div className={styles.card} key={recipe._id}>
          <Link href={`/home/${recipe._id}`} className={styles.link}>
            <img
              className={styles.image}
              src={recipe.image}
              alt={recipe.title}
            />
          </Link>
          <div>
            <p className={styles.name}>{recipe.title}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
