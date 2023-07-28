import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Search.module.css";
import Image from "next/image";
import { useGetFiltersRecipesQuery } from "../../redux/recipes/recipeApi";
import { setRecipes } from "../../redux/recipes/recipeSlice";
import Swal from "sweetalert2";

function Search() {
  const [search, setSearch] = useState("");
  const [doSearch, setDoSearch] = useState(false);
  const dispatch = useDispatch();

  const {
    data: filtersRecipes,
    isLoading,
    isError,
  } = useGetFiltersRecipesQuery(
    doSearch
      ? {
          title: search,
          // ingredients: search
        }
      : null
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDoSearch(true);
  };

  useEffect(() => {
    if (search === "") {
      setDoSearch(false);
      dispatch(setRecipes([]));
    }

    if (doSearch) {
      if (filtersRecipes?.error && filtersRecipes?.success === false) {
        Swal.fire({
          icon: "error",
          title: "Lo sentimos",
          text: "No existe recetas con este nombre",
          button: "Ok",
        }).then(() => {
          dispatch(setRecipes([]));
          setDoSearch(false);
          setSearch("");
        });
      } else {
        dispatch(setRecipes(filtersRecipes));
      }
    }
  }, [filtersRecipes, isLoading, isError, doSearch, search]);

  return (
    <>
      {console.log(filtersRecipes, "success")}
      <div className={styles.nav_input}>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className={styles.nav_input}
        >
          <input
            type="text"
            placeholder="Busca por recetas..."
            maxLength="35"
            autoComplete="off"
            className={styles.input_text}
            value={search}
            onChange={(event) => handleChange(event)}
          />
          <button
            name="name"
            value={search}
            onClick={handleSubmit}
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
        </form>
      </div>
    </>
  );
}

export default Search;
