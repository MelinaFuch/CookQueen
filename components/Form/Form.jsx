import { useState } from "react";
import { useDispatch } from "react-redux";
import { usePostRecipeMutation } from "../../redux/recipes/recipeApi";
import { Form, Field, Formik, ErrorMessage } from "formik";
import styles from "./Form.module.css";
import Image from "next/image";

const newRecipe = () => {
  const [postRecipeMutation] = usePostRecipeMutation();

  return (
    <Formik
      initialValues={{
        title: "",
        image: "",
        category: [],
        ingredients: "",
        description: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.title) {
          errors.title = "Por favor ingresa un título";
        }
        if (values.category.length === 0) {
          errors.category = "Por favor selecciona una categoría";
        } else if (values.category.length < 2) {
          errors.category = "Por favor, selecciona más de una categoría";
        }
        if (!values.ingredients) {
          errors.ingredients = "Por favor escriba los ingredientes";
        }
        if (!values.description) {
          errors.description = "Por favor escriba una descripción";
        }
        // if (!values.image) {
        //   errors.image = "Por favor selecciona una imagen";
        // }
        return errors;
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log({ values });
        await postRecipeMutation(values);
        resetForm();
      }}
      // validateOnMount
    >
      {({ values, errors, setFieldValue, handleChange }) => {
        const handleDeleteCategory = (category) => {
          const updatedCategories = values.category.filter(
            (c) => c !== category
          );
          setFieldValue("category", updatedCategories);
        };

        return (
          <div className={styles.container}>
            <Image
              className={styles.logo}
              src="/img/logo-color.jpg"
              width={56}
              height={66}
              alt="Logo"
            />
            <h1 className={styles.title}>¡SUBE TU SÚPER NUEVA RECETA!</h1>
            <Form className={styles.container_form}>
              <label className={styles.label}>Nombre de la receta:</label>
              <Field
                type="text"
                name="title"
                placeholder="Escribe el nombre de tu receta..."
                className={styles.field}
              />
              <ErrorMessage
                name="title"
                component={() => (
                  <div className={styles.error}>{errors.title}</div>
                )}
              />
              <label className={styles.label}>Ingredientes:</label>
              <Field
                as="textarea"
                name="ingredients"
                placeholder="Escribe los ingredientes de tu receta..."
                rows="4"
                cols="50"
                className={styles.textarea}
              />
              <ErrorMessage
                name="ingredients"
                component={() => (
                  <div className={styles.error}>{errors.ingredients}</div>
                )}
              />
              <label className={styles.label}>Paso a paso:</label>
              <Field
                as="textarea"
                name="description"
                placeholder="Escribe el paso a paso de tu receta..."
                rows="4"
                cols="50"
                className={styles.textarea}
              />
              <ErrorMessage
                name="description"
                component={() => (
                  <div className={styles.error}>{errors.description}</div>
                )}
              />
              <label className={styles.label}>Y/o sube un vídeo:</label>
              <button className={styles.video}>Select Video</button>
              <label className={styles.label}>
                Selecciona la(s) categoría(s) que encaje(n) con tu receta::
              </label>
              <Field
                as="select"
                name="category"
                placeholder="category"
                className={styles.select}
                multiple={false}
                onChange={(event) => {
                  const { value } = event.target;
                  if (!values.category.includes(value)) {
                    setFieldValue("category", [...values.category, value]);
                  }
                }}
              >
                <option value="">Elige la/s categoría/s</option>
                <option value="Dulce">Dulce</option>
                <option value="Agridulce">Agridulce</option>
                <option value="Salado">Salado</option>
                <option value="Desayuno/Merienda">Desayuno/Merienda</option>
                <option value="Almuerzo">Almuerzo</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Carnes">Carnes</option>
                <option value="Pasta">Pasta</option>
                <option value="Panes">Panes</option>
                <option value="Postres">Postres</option>
                <option value="Para mascotas">Para mascotas</option>
              </Field>
              <ErrorMessage
                name="category"
                component={() => (
                  <div className={styles.error_select}>{errors.category}</div>
                )}
              />
              <div className={styles.buttonCategory}>
                {values.category?.map((category) => (
                  <ul key={category}>
                    <button
                      className={styles.delete}
                      type="button"
                      onClick={() => handleDeleteCategory(category)}
                    >
                      x {`${category} `}
                    </button>
                  </ul>
                ))}
              </div>

              <label className={styles.label}>
                ¡Por último, sube una linda foto!:
              </label>
              <button className={styles.video}>Select image</button>
              {/* <Field type="text" name="image" placeholder="image" /> */}
              <ErrorMessage
                name="image"
                component={() => (
                  <div className={styles.error_image}>{errors.image}</div>
                )}
              />
              <button
                type="submit"
                className={styles.submit}
                disabled={
                  errors.title ||
                  errors.image ||
                  errors.description ||
                  errors.ingredients ||
                  errors.category
                }
              >
                SUBIR RECETA
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default newRecipe;
