import { useState } from "react";
import styles from "./Search.module.css"
import Image from "next/image";
import { useGetAllRecipesQuery } from "../../redux/recipes/recipeApi";

function Search () {
    const [search, setSearch] = useState("");
    const {data: allRecipes, isLoading, isError} = useGetAllRecipesQuery({
        title: search, 
        // ingredients: search
    });

    const handleSearch = (event) => {
        setSearch(event.target.value);
        console.log(search)
    };

    const inputSearch = async () => {
        isError ? console.log(isError) : console.log({allRecipes})
    }

    return (
        <>
            <div className={styles.nav_input}>
                <input
                    type="text"
                    placeholder="Busca por ingredientes o recetas..."
                    maxLength="35"
                    autoComplete="off"
                    className={styles.input_text}
                    onChange={(event) => handleSearch(event)}
                />
                <button
                    name="name"
                    value={search}
                    onClick={inputSearch}
                    className={styles.searchButton}
                >
                    <Image
                        src="/img/buscar.png"
                        width={64}
                        height={64}
                        alt="lupa"
                        className={styles.lupa}
                    />
                </button>
            </div>
            <div>
                <Image
                    src="/img/menu-nav.svg"
                    width={118}
                    height={118}
                    alt="menu-nav"
                />
            </div>
        </>
    )
}

export default Search;