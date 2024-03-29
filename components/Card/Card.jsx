import Link from "next/link";
import styles from "./Card.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetFiltersRecipesQuery } from "../../redux/recipes/recipeApi";

export default function card({ recipes }) {
  const {
    data: filterRecipe,
    isLoading,
    error,
  } = useGetFiltersRecipesQuery({ category: "Dulce" });

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
    slidesToShow: recipes.length < 4 ? recipes.length : 4,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <Slider {...settings} className={styles.mySlider}>
      {/* {console.log(filterRecipe?.data)}; */}

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
