// import Layout from "../../../components/Layout";
// import Search from "../../../components/Search/Search";
import Image from "next/image";
import styles from "./Home.module.css";
import SliderCard from "../../../components/Slider/SliderCard"
import Card from "../../../components/Card/Card"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../../data";

export default function inicio () {
    const renderRecipes = (allRecipes, cantidad) => {
        return allRecipes.slice(0, cantidad).map((recipe) => {
            return <SliderCard recipe={recipe} key={recipe.id}/>;
        });
    };
    const renderCards = (allRecipes, cantidad) => {
        return allRecipes.slice(0, cantidad).map((recipe) => {
            return <Card recipe={recipe} key={recipe.id}/>;
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        autoPlaySpeed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
    };
    const recipes = data.results;

    return (
        <div className={styles.container}>
            <div className={styles.container_logo}>
                <Image
                    className={styles.logo}
                    src='/img/cookqueen.jpg'
                    width={66}
                    height={37}
                    alt="logo"
                    />
            </div>
            <div>
                <Slider className={styles.slider} {...settings}>
                    {renderRecipes(recipes, 5)}
                </Slider>
            </div>
            <Card/>
            <div>
                <h1 className={styles.title}>¡Novedades!</h1>
                <Card/>
            </div>
            <div>
                <h1 className={styles.title}>¡Para desayunar/merendar rico!</h1>
                <Card/>
            </div>
            <div>
                <h1 className={styles.title}>¡A almorzar!</h1>
                <Card/>
            </div>
        </div>
    )
}

// export async function getStaticProps() {
//     try {
//         const res = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=f3c7301f7c9641a38500086d88e7786d");
//         const data = await res.json();
//         return {
//             props: data
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// &number=100&addRecipeInformation=true