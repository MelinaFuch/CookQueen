// import Link from "next/link";
import styles from "./Card.module.css";
import data from "../../src/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function card () {
    const recipes= data.results;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    return (
        <Slider 
        {...settings} 
        className={styles.mySlider} 
        prevArrow={<button style={{ color: 'red' }}>Anterior</button>}
        nextArrow={<button style={{ color: 'blue' }}>Siguiente</button>}
        >
            {
                recipes.map(recipe => (
                    <div className={styles.card} key={recipe.id}>
                        <img className={styles.image} src={recipe.image} alt={recipe.title} />
                        <p className={styles.name}>{recipe.title}</p>
                    </div>
                ))
            }
        </Slider>
    )
}