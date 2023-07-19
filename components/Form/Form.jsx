import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePostRecipeMutation } from "../../redux/recipes/recipeApi";
import { Form, Field, Formik, ErrorMessage } from "formik";
import styles from "./Form.module.css";
import Image from "next/image";
import { Widget } from "@uploadcare/react-widget";

const newRecipe = () => {
  const [postRecipeMutation] = usePostRecipeMutation();
  // const UPLOADCARE_PUBLIC_KEY = process.env.UPLOADCARE_PUBLIC_KEY;

  // useEffect(() => {
  //   console.log("Es mi api key", process.env.UPLOADCARE_PUBLIC_KEY);
  // }, []);

  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;
  // /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{2}$/;

  return (
    <Formik
      initialValues={{
        title: "",
        image: "",
        category: [],
        ingredients: "",
        description: "",
        video: "",
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
        // if (values.description && !values.video) {
        //   return;
        // }
        if (!values.description && values.video) {
          if (!regex.test(values.video)) {
            errors.video = "Por favor escribe una URL válida";
          }
        }
        if (values.description && values.video) {
          if (!regex.test(values.video)) {
            errors.video = "Por favor escribe una URL válida";
          }
        }
        if (!values.description && !values.video) {
          errors.description = "Por favor escriba el paso a paso de su receta";
          errors.video = "Por favor escriba una url de su video";
        }
        if (!values.image) {
          errors.image = "Por favor selecciona una imagen";
        }
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
              <Field
                type="text"
                name="video"
                placeholder="Escribe la URL del video de su receta..."
                className={styles.field}
              />
              <ErrorMessage
                name="video"
                component={() => (
                  <div className={styles.error}>{errors.video}</div>
                )}
              />
              {/* <button className={styles.video}>Select Video</button> */}
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
                      X {`${category} `}
                    </button>
                  </ul>
                ))}
              </div>

              <label className={styles.label}>
                ¡Por último, sube una linda foto!:
              </label>
              <div className={styles.image}>
                <Widget
                  tabs="file url facebook gphotos instagram"
                  locale="es"
                  name="image"
                  imagesOnly
                  publicKey="da7189a159abe1a7e2ee"
                  previewStep
                  clearable
                  onFileSelect={(file) => {
                    if (!file) {
                      setFieldValue("image", "");
                      return;
                    }
                    file.done((fileInfo) => {
                      setFieldValue("image", fileInfo.cdnUrl);
                    });
                  }}
                  onChange={(file) => {
                    setFieldValue("image", file);
                  }}
                />
              </div>
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
                  errors.category ||
                  errors.video
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
