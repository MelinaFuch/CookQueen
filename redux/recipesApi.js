import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
    reducerPath: "recipeApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000"
        // process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }),
    // tagTypes: ["products", "allProducts"],
    endpoints: (builder) => ({
        getAllRecipes: builder.query({
            query: () => ({
                url: "/api/recipes",
                // params: filters,
            }),
        // providesTags: ["products"],
        }),
        getRecipe: builder.query({
            query: (id) => ({
                url: `/api/recipes/${id}`
            })
        }),
        postRecipe: builder.mutation({
            query: (recipe) => ({
                url: '/api/recipes',
                method: "POST",
                body: recipe,
                headers: { "Content-Type": "application/json" },
            })
        }),
    // getAllProducts: builder.query({
    //   query: (filter) =>
    //     `/api/get/product/admin/productDash?filterOne=${filter.one || "All"}&filterTwo=${filter.two === "true"?true:filter.two === "false"? false:"All"}&pg=${filter.pg}`,
    //   providesTags: ["allProducts"],
    // }),
    // deleteProduct: builder.mutation({
    //   query: (id) => ({
    //     url: `/api/delete/deleteProduct?productId=${id}`,
    //     method: "PATCH",
    //     header: { "Content-Type": "application/json" },
    //   }),
    //   invalidatesTags: ["allProducts"],
    // }),
    }),
});

export const {useGetAllRecipesQuery, useGetRecipeQuery, usePostRecipeMutation} = recipeApi